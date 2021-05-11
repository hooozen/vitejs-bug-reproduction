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
            <el-form-item prop="id" label="员工编号:">
              {{ formData.id }}
            </el-form-item>
            <el-form-item prop="fullName" label="姓名:">
              <el-input v-model="formData.fullName"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="性别:">
              <el-input v-model="formData.sex"></el-input>
            </el-form-item>
            <el-form-item prop="nation" label="民族:">
              <el-input v-model="formData.nation"></el-input>
            </el-form-item>
            <el-form-item prop="mobile" label="电话:">
              <el-input v-model="formData.mobile"></el-input>
            </el-form-item>
            <el-form-item prop="identityNo" label="身份证:">
              <el-input v-model="formData.identityNo"></el-input>
            </el-form-item>
            <el-form-item prop="education" label="学历:">
              <el-input v-model="formData.education"></el-input>
            </el-form-item>
            <el-form-item prop="department" label="部门:">
              <el-input v-model="formData.department"></el-input>
            </el-form-item>
            <el-form-item prop="post" label="职位:">
              <el-input v-model="formData.post"></el-input>
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item label="入职日期">
              <el-date-picker
                v-model="formData.joinedDate"
                type="date"
                placeholder="入职日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="_district" label="户籍地址:">
              <tl-address
                v-model:district="formData._censusDistrict"
                v-model:address="formData.censusAddress"
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
            <el-form-item prop="operatorId" label="员工归属:">
              <tl-operator></tl-operator>
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item prop="profilePhoto" label="照片:">
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
                  <div class="el-upload__tip">
                    点击头像上传，支持扩展名：.jpg .png
                  </div>
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
