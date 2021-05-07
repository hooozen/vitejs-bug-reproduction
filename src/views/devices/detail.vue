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
          label-width="100px"
        >
          <div class="item-body-column" style="flex-basis: 400px">
            <el-form-item prop="sequence" label="设备序列号:">
              {{ deviceInfo.sequence }}
            </el-form-item>
            <el-form-item prop="type" label="设备型号:">
              {{ deviceInfo.deviceType.name }}
            </el-form-item>
            <el-form-item prop="name" label="设备名称:">
              <el-input v-model="deviceInfo.name"></el-input>
            </el-form-item>
            <el-form-item prop="store" label="当前归属:">
              <el-input v-model="deviceInfo.store.name"></el-input>
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
        <el-form class="main-item-body" style="align-items: center">
          <div class="item-body-column" style="flex-basis: 120px">
            <el-form-item label="工作状态:">正常</el-form-item>
            <el-form-item label="气压:">0.3Mpa</el-form-item>
            <el-form-item label="环境温度:">25</el-form-item>
            <el-form-item label="内部温度:">5</el-form-item>
          </div>
          <div class="item-body-column">
            <img class="device-photo" src="/img/device-1.png" />
          </div>
          <div class="item-body-column" style="flex-bisis: 160px">
            <el-form-item label="啤酒1:">6.1kg 61%</el-form-item>
            <el-form-item label="啤酒2:">6.1kg 61%</el-form-item>
            <el-form-item label="啤酒3:">6.1kg 61%</el-form-item>
            <el-form-item label="啤酒4:">6.1kg 61%</el-form-item>
          </div>
        </el-form>
      </div>
      <div class="main-item">
        <div class="main-item-body">
          <el-tabs v-model="activeTab" type="card">
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

  import { add, AddParams, UpdateParams, update, getById } from '@/api/server/device'

  import formRules from './formRules'
  import { template as formDataTemplate, generateFormData } from './formDataTemplate'

  export default defineComponent({
    components: {
      NavBar,
      TMap,
      TlAddress
    },
    props: {
      type: {
        type: String,
        required: true,
      }
    },
    setup(props) {
      const formData = ref({})
      const formEl = ref(null)

      const route = useRoute()
      const id = computed(() => route.query.id)

      const editable = ref<boolean>(true)
      // const editable = ref<boolean>(false)
      // if (props.type === 'add') editable.value = true

      const title = computed(() => props.type === 'edit' ? '运营商详情' : '新增运营商')

      const activeTab = ref("data");

      const submitForm = () => {
        (formEl.value as any).validate(async (valid: any) => {
          if (!valid) return
          let _formData: { [key: string]: any } = {}
          for (const [k, v] of Object.entries(formData.value)) {
            if (k.substring(0, 1) === '_') continue
            _formData[k] = v
          }
          if (props.type === 'add')
            await add(_formData as AddParams, '新增成功')
          else await update(_formData as UpdateParams, '保存成功')
        })
      }

      const updateFormDistrictName = (value: string[], name: string[]) => {
        console.log(name.join('/'))
      }
      const updateFormBusinessScopeName = (value: string[], name: string[]) => {
        console.log(name.join('/'))
      }

      const deviceInfo = ref({
        createTime: '',
        name: '',
        sequence: '',
        deviceType: {},
        store: {}
      })
      const getDeviceInfo = async () => {
        const data = (await getById(id.value as string)).data
        deviceInfo.value = data.deviceInfo
      }

      const init = () => {
        if (id.value) getDeviceInfo()
      }


      onMounted(() => {
        console.log('xxxx')
        void init()
      })

      return {
        title, editable,
        updateFormDistrictName,
        updateFormBusinessScopeName,
        location, activeTab, formData, formRules, submitForm, formEl,
        deviceInfo, 
      };
    },
  });
</script>
<style lang="postcss"></style>
