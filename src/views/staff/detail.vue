<template>
  <div class="detail-view staff-detail">
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
            <el-form-item prop="code" label="员工编号:">
              <el-input v-model="formData.code"></el-input>
            </el-form-item>
            <el-form-item prop="name" label="姓名:">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item prop="socialCreditCode" label="性别:">
              <el-input v-model="formData.socialCreditCode"></el-input>
            </el-form-item>
            <el-form-item prop="contacts" label="民族:">
              <el-input v-model="formData.contacts"></el-input>
            </el-form-item>
            <el-form-item prop="tel" label="电话:">
              <el-input v-model="formData.tel"></el-input>
            </el-form-item>
            <el-form-item prop="accountBank" label="身份证:">
              <el-input v-model="formData.accountBank"></el-input>
            </el-form-item>
            <el-form-item prop="account" label="学历:">
              <el-input v-model="formData.account"></el-input>
            </el-form-item>
            <el-form-item prop="account" label="部门:">
              <el-input v-model="formData.account"></el-input>
            </el-form-item>
            <el-form-item prop="account" label="职位:">
              <el-input v-model="formData.account"></el-input>
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item label="入职日期">
              <el-date-picker
                v-model="createTime"
                type="date"
                placeholder="添加日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="_district" label="户籍地址:">
              <tl-address
                v-model:district="formData._district"
                v-model:address="formData.address"
                :deepth="4"
                @change="updateFormDistrictName"
                :full="true"
              ></tl-address>
            </el-form-item>
            <el-form-item prop="_district" label="现住地址:">
              <tl-address
                v-model:district="formData._district"
                v-model:address="formData.address"
                :deepth="4"
                @change="updateFormDistrictName"
                :full="true"
              ></tl-address>
            </el-form-item>
            <el-form-item prop="status" label="员工归属:"> </el-form-item>
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
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item prop="businessLicense" label="营业执照:">
              <el-upload
                class="avatar-uploader"
                action="/beer/admin/common/uploadFile"
                :show-file-list="false"
                :on-success="uploadLicenseSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <template #tip>
                  <div class="el-upload__tip">点击头像上传，支持扩展名：.jpg .png</div>
                </template>
              </el-upload>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue'

  import { ElMessage } from 'element-plus'

  import NavBar from '../components/nav-bar/index.vue'
  import TlAddress from '../components/address/index.vue'
  import TlSelect from '../components/selector/index.vue'
  import TlOrganization from '../components/org-select/index.vue'
  import TlTag from '../components/tag-select/index.vue'
  import TlTags from '../components/tag-list/index.vue'

  import { add, AddParams, UpdateParams, update, getById } from '@/api/server/store'
  import { getByStoreId } from '@api/server/device'

  import { useRoute } from 'vue-router'

  import options from './options'
  import formRules from './formRules'
  import { blankFormData as formDataTemplate, generateFormData, } from './formDataTemplate'

  export default defineComponent({
    components: {
      NavBar,
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
      const formData = ref<AddParams>({} as any)
      const formEl = ref(null)

      formData.value = formDataTemplate

      const route = useRoute()
      const id = computed(() => route.query.id)

      const editable = ref<boolean>(true)
      // const editable = ref<boolean>(false)
      // if (props.type === 'add') editable.value = true

      const mapCenter = ref<number[]>([39.90689, 116.3976])

      const title = computed(() =>
        props.type === 'edit' ? '员工详情' : '新增员工',
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
          if (props.type === 'add') await add(_formData as AddParams, '新增成功')
          else await update(_formData as UpdateParams, '保存成功')
        })
      }

      const updateFormDistrictName = (value: string[], name: string[]) => {
      }

      const setFormData = async () => {
        if (!id.value) return
        const originalForm = (await getById(id.value as string)).data
        isShowLicenseViewBtn.value = true
        isShowPhotoViewBtn.value = true
        formData.value = generateFormData(originalForm)
        mapCenter.value = [+originalForm.latitude, +originalForm.longitude]
      }

      const devices = ref([])
      const getDevices = async () => {
        if (!id.value) return
        devices.value = (await getByStoreId(id.value as string)).data
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
        devices,
      }
    },
  })
</script>
<style lang="postcss">
  .staff-detail {
    & .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 200px;
      height: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    & .avatar-uploader-icon {
      font-size: 40px;
      color: #8c939d;
    }
    & .avatar {
      width: 200px;
      height: 240px;
      display: block;
    }
    & .el-upload__tip {
      line-height: 20px;
      margin: 0;
    }
  }
</style>
