<template>
  <div class="detail-view device-type-detail">
    <nav-bar class="detail-nav" title="设备型号详情">
      <el-button type="primary" @click="submitForm"> 保存 </el-button>
    </nav-bar>
    <div class="detail-main">
      <el-form
        class="device-type-form main-item"
        inline
        ref="formEl"
        :model="deviceTypeData"
        :rules="formRules"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="deviceTypeData.name"></el-input>
        </el-form-item>
        <el-form-item label="型号对应序列号标识" prop="sequencePrefix">
          <el-input v-model="deviceTypeData.sequencePrefix"></el-input>
        </el-form-item>
        <el-form-item label="设备照片" prop="devicePhoto">
          <tl-image-uploader
            v-model="deviceTypeData.devicePhoto"
            actionUrl="/beer/admin/common/uploadFile"
            tip="支持扩展名：.jpg .png，尺寸要求 800*480"
          ></tl-image-uploader>
        </el-form-item>
      </el-form>
      <div class="main-item">
        <el-tabs v-model="activeTab" type="card">
          <el-tab-pane :lazy="true" label="属性" name="property">
            <device-property-table
              :deviceTypeId="deviceTypeId"
            ></device-property-table>
          </el-tab-pane>
          <!--
          <el-tab-pane label="事件" name="event">
            <device-event-table :id="deviceTypeId"></device-event-table>
          </el-tab-pane>
          <el-tab-pane label="服务" name="service">
            <device-service-table :id="deviceTypeId"></device-service-table>
          </el-tab-pane>
          -->
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue'

  import NavBar from '../../components/nav-bar/index.vue'
  import TlImageUploader from '../../components/image-uploader/index.vue'

  import DevicePropertyTable from './property/table.vue'
  import DeviceEventTable from './event/table.vue'
  import DeviceServiceTable from './service/table.vue'

  import { getById, update, UpdateParams } from '@api/server/deviceType'
  import { useRoute } from 'vue-router'

  const formRules = {
    name: [{ required: true, message: '请输入设备型号名称', trriger: 'blur' }],
    sequencePrefix: [{ required: true, message: '请输入序列号标识', trriger: 'blur' }],
    devicePhoto: [{ required: true, message: '请上传设备照片', trriger: 'blur' }],
  }

  export default defineComponent({
    components: {
      NavBar,
      TlImageUploader,
      DevicePropertyTable,
      DeviceEventTable,
      DeviceServiceTable,
    },

    setup() {
      const activeTab = ref<string>('property')

      const route = useRoute()
      const deviceTypeId = computed<string>(() => route.query.id as string)
      const deviceTypeData = ref<UpdateParams>({
        name: '',
        sequencePrefix: '',
        devicePhoto: '',
        id: '',
        parentId: '',
      })
      const pageTitle = computed(() => deviceTypeData.value.name || '设备型号详情')
      const getDeviceData = async () => {
        deviceTypeData.value = (await getById(deviceTypeId.value as any)).data
        console.log(deviceTypeData.value)
      }

      const init = () => {
        getDeviceData()
      }

      const formEl = ref(null)

      const submitForm = () => {
        (formEl.value as any).validate(async (valid: Boolean) => {
          if (!valid) return
          await update(deviceTypeData.value, '保存成功')
        })
      }



      onMounted(() => void init())

      return {
        pageTitle, deviceTypeData, formRules, formEl, submitForm, deviceTypeId, activeTab,
      }

    },
  })
</script>
<style lang="postcss">
  .device-type-detail {
    & .main-item {
      padding: 0 15px;
    }
  }
</style>

