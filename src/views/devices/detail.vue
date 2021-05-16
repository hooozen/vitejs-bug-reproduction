<template>
  <div class="detail-view device-detail">
    <nav-bar class="detail-nav" :title="title">
      <el-button v-if="editable" type="primary" @click="submitForm">
        保存
      </el-button>
      <el-button v-else @click="editable = true">编辑</el-button>
    </nav-bar>
    <div class="detail-main">
      <div class="main-item">
        <div class="main-item-title">基本信息</div>
        <el-form
          :disabled="!editable"
          ref="formEl"
          :rules="formRules"
          :model="formData"
          class="main-item-body"
          label-width="120px"
        >
          <div class="item-body-column" style="flex-basis: 400px">
            <el-form-item prop="sequence" label="设备序列号:">
              {{ formData.sequence }}
            </el-form-item>
            <el-form-item prop="type" label="设备型号:">
              {{ deviceInfo.deviceType.name }}
            </el-form-item>
            <el-form-item prop="name" label="设备名称:">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item prop="storeId" label="当前归属:">
              <tl-store
                v-model="formData.storeId"
                :initial-option="storeOption"
              ></tl-store>
            </el-form-item>
            <el-form-item prop="online" label="在线状态:">
              {{ formData.online }}
            </el-form-item>
            <el-form-item prop="status" label="设备状态:">
              {{ formData.status }}
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item prop="alarm" label="预警状态:">
              {{ formData.alarm }}
            </el-form-item>
            <el-form-item prop="active" label="激活状态:">
              {{ formData.active }}
            </el-form-item>
            <el-form-item label="添加时间:">
              {{ deviceInfo.createTime }}
            </el-form-item>
            <el-form-item label="激活时间:">
              {{ formData.createTime }}
            </el-form-item>
            <el-form-item label="最后上线时间:">
              {{ formData.createTime }}
            </el-form-item>
          </div>
          <!--
          <div class="item-body-column detail-map">
            <el-form-item label="经纬度" prop="_position">
              <t-map
                :center="formData._position"
                v-model:pointer="formData._position"
                class="el-map-outer"
              >
              </t-map>
            </el-form-item>
          </div>
          -->
        </el-form>
      </div>
      <div class="main-item">
        <div class="main-item-title">设备状态</div>
        <div class="main-item-body" style="align-items: center">
          <div class="item-body-column" style="flex-basis: 280px">
            <div class="device-status-item">
              工作状态:
              {{
                options.status.find((s) => s.value == deviceStatus.status)
                  ?.label
              }}
            </div>
            <div class="device-status-item">
              气压: {{ deviceStatus.airPressure }}
            </div>
            <div class="device-status-item">
              环境温度: {{ deviceStatus.envTemp }}
            </div>
            <div class="device-status-item">
              内部温度: {{ deviceStatus.machineTemp }}
            </div>
          </div>
          <div class="item-body-column" style="flex-bisis: 280px">
            <div class="device-status-item">啤酒1:</div>
            <div class="device-status-item">啤酒2:</div>
            <div class="device-status-item">啤酒3:</div>
            <div class="device-status-item">啤酒4:</div>
          </div>
          <div class="item-body-column device-photo-outer">
            <img class="device-photo" src="/img/device-1.png" />
          </div>
        </div>
      </div>
      <div class="main-item">
        <div class="main-item-body">
          <el-tabs v-model="activeTab">
            <el-tab-pane label="设备数据" name="data">
              <el-table></el-table>
            </el-tab-pane>
            <el-tab-pane label="已绑定门店" name="store">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="预警记录" name="warning">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="故障记录" name="breakdow">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="设备参数" name="params">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="运行记录" name="working">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="操作记录" name="device">
              <el-table border></el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from "vue";
  import { useRoute } from "vue-router";

  import NavBar from "../components/nav-bar/index.vue";
  import TMap from "../components/TMap/index.vue";
  import TlAddress from "../components/address/index.vue";
  import TlStore from "../components/store-select/index.vue";
  import options from './options'

  import { add, AddParams, UpdateParams, update, getById } from '@/api/server/device'

  import formRules from './formRules'
  import { emptyLocalForm, generateLocalFormData, generateFormData } from './formDataTemplate'

  export default defineComponent({
    components: {
      NavBar,
      TMap,
      TlAddress,
      TlStore
    },
    props: {
      type: {
        type: String,
        required: true,
      }
    },
    setup(props) {
      const formData = ref<any>({})
      const formEl = ref(null)

      formData.value = emptyLocalForm

      const route = useRoute()
      const id = computed(() => route.query.id)

      const editable = ref<boolean>(true)
      // const editable = ref<boolean>(false)
      // if (props.type === 'add') editable.value = true

      const title = computed(() => props.type === 'edit' ? '设备详情' : '新增设备')

      const activeTab = ref("data");

      const submitForm = () => {
        (formEl.value as any).validate(async (valid: any) => {
          if (!valid) return
          const _formData = generateFormData(formData.value)
          if (props.type === 'add')
            await add(_formData as AddParams, '新增成功')
          else await update(_formData as UpdateParams, '保存成功')
        })
      }

      const deviceInfo = ref({
        deviceType: {},
        store: {}
      })
      const deviceStatus = ref<any>({})

      const storeOption = ref<OptionData[]>([])
      const getDeviceInfo = async () => {
        const data = (await getById(+id.value!)).data

        deviceStatus.value = data.deviceStatus || {}

        const _deviceInfo = data.deviceInfo
        deviceInfo.value = _deviceInfo
        formData.value = generateLocalFormData(_deviceInfo, id.value as string)

        storeOption.value = [{
          value: (_deviceInfo.store as any).id,
          label: (_deviceInfo.store as any).name
        }]
      }

      const init = () => {
        if (id.value) getDeviceInfo()
      }


      onMounted(() => void init())

      return {
        title, editable,
        location, activeTab, formData, formRules, submitForm, formEl,
        deviceInfo, storeOption,
        deviceStatus, options,
      };
    },
  });
</script>
<style lang="postcss"></style>
