<template>
  <div class="detail-view store-detail">
    <nav-bar class="detail-nav" :title="title">
      <el-button v-if="editable" type="primary" @click="submitForm">
        保存
      </el-button>
      <el-button v-else @click="editable = true">编辑</el-button>
    </nav-bar>
    <div class="detail-main">
      <div class="main-item">
        <div class="main-item-head">
          <div class="main-item-title">基本信息</div>
        </div>
        <el-form
          :disabled="!editable"
          ref="formEl"
          :rules="formRules"
          :model="formData"
          class="main-item-body"
          label-width="100px"
        >
          <div class="item-body-column" style="flex-basis: 400px">
            <el-form-item prop="name" label="名称:">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item prop="socialCreditCode" label="组织代码:">
              <el-input v-model="formData.socialCreditCode"></el-input>
            </el-form-item>
            <el-form-item prop="contacts" label="联系人:">
              <el-input v-model="formData.contacts"></el-input>
            </el-form-item>
            <el-form-item prop="tel" label="电话:">
              <el-input v-model="formData.tel"></el-input>
            </el-form-item>
            <el-form-item prop="accountBank" label="开户行:">
              <el-input v-model="formData.accountBank"></el-input>
            </el-form-item>
            <el-form-item prop="account" label="账号:">
              <el-input v-model="formData.account"></el-input>
            </el-form-item>
            <el-form-item prop="_district" label="地址:">
              <tl-address
                v-model:district="formData._district"
                v-model:address="formData.address"
                :deepth="4"
                @change="updateFormDistrictName"
                :full="true"
              ></tl-address>
            </el-form-item>
            <el-form-item prop="status" label="门店状态:">
              <tl-select
                :options="options.status"
                v-model="formData.status"
              ></tl-select>
            </el-form-item>
            <el-form-item prop="_timeRange" label="营业时间:">
              <el-time-picker
                is-range
                v-model="formData._timeRange"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围"
              >
              </el-time-picker>
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item label="门店编号:" prop="code">
              <el-input v-model="formData.code"></el-input>
            </el-form-item>
            <el-form-item label="门店标签:" prop="tag">
              <tl-tags v-model="formData._tags"></tl-tags>
            </el-form-item>
            <el-form-item
              v-if="type == 'edit'"
              label="添加时间:"
              prop="status"
              >{{ formData.createTime }}</el-form-item
            >
            <el-form-item label="备注:">
              <el-input
                v-model="formData.description"
                type="textarea"
              ></el-input>
            </el-form-item>
            <el-form-item prop="businessLicense" label="营业执照:">
              <span
                v-if="isShowLicenseViewBtn"
                class="text-btn"
                @click="viewLicense"
              >
                查看
              </span>
              <el-image-viewer
                v-if="isShowViewer"
                :url-list="[imagePreviewSrc]"
                @close="isShowViewer = false"
              ></el-image-viewer>
              <el-upload
                action="/beer/admin/common/uploadFile"
                :on-success="uploadLicenseSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload"
                :showFileList="false"
              >
                <el-button size="small" type="primary" v-loading="isUploading">
                  <i class="el-icon-upload el-icon--right"></i>
                  上传文件
                </el-button>
                <template #tip>
                  <div class="el-upload__tip">支持扩展名：.jpg .png</div>
                </template>
              </el-upload>
            </el-form-item>
            <el-form-item prop="storePhoto" label="门头照片:">
              <span
                v-if="isShowPhotoViewBtn"
                class="text-btn"
                @click="viewPhoto"
              >
                查看
              </span>
              <el-image-viewer
                v-if="isShowViewer"
                :url-list="[imagePreviewSrc]"
                @close="isShowViewer = false"
              ></el-image-viewer>
              <el-upload
                action="/beer/admin/common/uploadFile"
                :on-success="uploadPhotoSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload"
                :showFileList="false"
              >
                <el-button size="small" type="primary" v-loading="isUploading">
                  <i class="el-icon-upload el-icon--right"></i>
                  上传文件
                </el-button>
                <template #tip>
                  <div class="el-upload__tip">支持扩展名：.jpg .png</div>
                </template>
              </el-upload>
            </el-form-item>
            <el-form-item prop="orgId" label="组织">
              <tl-organization v-model="formData.orgId"></tl-organization>
            </el-form-item>
          </div>
          <div class="item-body-column detail-map">
            <el-form-item label="单位经纬度" prop="_position">
              <t-map
                :center="formData._position"
                v-model:pointer="formData._position"
                class="el-map-outer"
              ></t-map>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="main-item">
        <div class="main-item-head">
          <div class="main-item-title">设备列表</div>
        </div>
        <div class="main-item-body" style="padding: 0">
          <el-table :data="devices" :stripe="true">
            <el-table-column
              v-for="col in deviceColumns"
              :key="col.prop"
              :label="col.label"
              :prop="col.prop"
              align="center"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue'

  import { ElMessage } from 'element-plus'

  import NavBar from '../components/nav-bar/index.vue'
  import TMap from '../components/TMap/index.vue'
  import TlAddress from '../components/address/index.vue'
  import TlSelect from '../components/selector/index.vue'
  import TlOrganization from '../components/org-select/index.vue'
  import TlTag from '../components/tag-select/index.vue'
  import TlTags from '../components/tag-list/index.vue'

  import { add, AddParams, UpdateParams, update, getById } from '@/api/server/store'
  import { getByStoreId } from '@api/server/device'

  import { useRoute } from 'vue-router'

  import options from './options'
  import deviceOptions from '@views/devices/options'
  import formRules from './formRules'
  import { blankFormData as formDataTemplate, generateFormData, generateLocalFormData, FormData } from './formDataTemplate'
  import deviceColumns from './deviceColumns'

  export default defineComponent({
    components: {
      NavBar,
      TMap,
      TlAddress,
      TlOrganization,
      TlSelect,
      TlTag,
      TlTags
    },
    props: {
      type: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const formData = ref<FormData>({} as any)
      const formEl = ref(null)

      formData.value = formDataTemplate

      const route = useRoute()
      const id = computed(() => route.query.id)

      const editable = ref<boolean>(true)
      // const editable = ref<boolean>(false)
      // if (props.type === 'add') editable.value = true

      const mapCenter = ref<number[]>([39.90689, 116.3976])

      const title = computed(() =>
        props.type === 'edit' ? '门店详情' : '新增门店',
      )

      const activeTab = ref('data')

      const submitForm = () => {
        (formEl.value as any).validate(async (valid: any) => {
          if (!valid) return
          let _formData: { [key: string]: any } = {}
          for (const [k, v] of Object.entries(formData.value)) {
            if (k.substring(0, 1) === '_') continue
            _formData[k] = v
          }
          console.log(_formData)
          if (props.type === 'add') await add(_formData as AddParams, '新增成功')
          else await update(_formData as UpdateParams, '保存成功')
        })
      }

      const updateFormDistrictName = (value: any, name: any) => {
        console.log(name.join(','))
        formData.value.fullAddress = name.join(',')
      }

      const setFormData = async () => {
        if (!id.value) return
        const originalForm = (await getById(id.value as string)).data
        isShowLicenseViewBtn.value = true
        isShowPhotoViewBtn.value = true
        formData.value = generateLocalFormData(originalForm)
        mapCenter.value = [+originalForm.latitude, +originalForm.longitude]
      }

      const devices = ref([])
      const getDevices = async () => {
        console.log(id.value)
        if (!id.value) return
        devices.value = (await getByStoreId(id.value as string)).data.map((device: any) => ({
          ...device,
          onlineName: deviceOptions.isOnline.find(s => s.value == device.online)?.label,
          statusName: deviceOptions.status.find(s => s.value == device.status)?.label,
          activeName: deviceOptions.isActive.find(s => s.value == device.active)?.label,
        }))
      }

      const init = async () => {
        setFormData()
        getDevices()
      }

      onMounted(async () => void init())

      const viewLicense = () => {
        imagePreviewSrc.value = formData.value.businessLicense;
        isShowViewer.value = true
      }

      const viewPhoto = () => {
        imagePreviewSrc.value = formData.value.photo!
        isShowViewer.value = true
      }

      const isShowLicenseViewBtn = ref<boolean>(false)
      const isShowPhotoViewBtn = ref<boolean>(false)
      const isShowViewer = ref<boolean>(false)
      const imagePreviewSrc = ref<string>('')
      const isUploading = ref<boolean>(false)
      const isUploadSuccess = ref<boolean>(false)
      const beforeUpload = (file: File) => {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
          ElMessage.error('只支持 .jpg .png 格式图片')
          return false
        }
        isUploading.value = true
      }
      const uploadPhotoSuccess = (res: any, file: any) => {
        isShowPhotoViewBtn.value = true
        imagePreviewSrc.value = URL.createObjectURL(file.raw)
        ElMessage.success('文件上传成功')
        formData.value.photo = res.data
        isUploading.value = false
      }
      const uploadLicenseSuccess = (res: any, file: any) => {
        isShowLicenseViewBtn.value = true
        imagePreviewSrc.value = URL.createObjectURL(file.raw)
        ElMessage.success('文件上传成功')
        formData.value.businessLicense = res.data
        isUploading.value = false
      }
      const uploadError = (e: any) => {
        ElMessage.error(`文件上传失败: ${e}`)
        isUploading.value = false
      }

      return {
        mapCenter,
        title,
        editable,
        options,
        updateFormDistrictName,
        location,
        activeTab,
        formData,
        formRules,
        submitForm,
        formEl,
        imagePreviewSrc,
        isShowViewer,
        isShowLicenseViewBtn,
        isShowPhotoViewBtn,
        viewLicense,
        viewPhoto,
        beforeUpload,
        uploadLicenseSuccess,
        uploadPhotoSuccess,
        uploadError,
        isUploadSuccess,
        isUploading,
        deviceColumns,
        devices,
      }
    },
  })
</script>
<style lang="postcss"></style>
