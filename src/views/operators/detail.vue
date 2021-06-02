<template>
  <div class="detail-view operator-detail">
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
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item label="运营商状态:" prop="status">
              <tl-select
                :options="options.status"
                v-model="formData.status"
              ></tl-select>
            </el-form-item>
            <el-form-item v-if="type === 'edit'" label="单位编号:">
              {{ formData.code }}
            </el-form-item>
            <el-form-item v-if="type === 'edit'" label="添加时间:">
              {{ formData.createTime }}
            </el-form-item>
            <el-form-item label="备注:">
              <el-input
                v-model="formData.description"
                type="textarea"
              ></el-input>
            </el-form-item>
            <el-form-item prop="businessLicense" label="营业执照:">
              <span
                v-if="isShowViewBtn"
                class="text-btn"
                @click="isShowViewer = true"
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
                :on-success="uploadSuccess"
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
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue'

  import { ElMessage } from 'element-plus'

  import NavBar from '../components/nav-bar/index.vue'
  import TMap from '../components/TMap/index.vue'
  import TlAddress from '../components/address/index.vue'
  import TlSelect from '../components/selector/index.vue'
  import TlOrganization from '../components/org-select/index.vue'

  import {
    add,
    AddParams,
    UpdateParams,
    update,
    getById,
  } from '@/api/server/operator'
  import { useRoute } from 'vue-router'

  import options from './options'
  import formRules from './formRules'
  import {
    template as formDataTemplate,
    generateFormData,
    FormData,
  } from './formDataTemplate'

  export default defineComponent({
    components: {
      NavBar,
      TMap,
      TlAddress,
      TlOrganization,
      TlSelect,
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
        props.type === 'edit' ? '运营商详情' : '新增运营商',
      )

      const activeTab = ref('data')

      const submitForm = () => {
        ; (formEl.value as any).validate(async (valid: any) => {
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

      const updateFormDistrictName = (e: Event) => {
      }

      onMounted(async () => {
        if (id.value) {
          const originalForm = (await getById(id.value as string)).data
          isShowViewBtn.value = true
          imagePreviewSrc.value = originalForm.businessLicense
          formData.value = generateFormData(originalForm)
          mapCenter.value = [+originalForm.latitude, +originalForm.longitude]
        }
      })

      const isShowViewBtn = ref<boolean>(false)
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
      const uploadSuccess = (res: any, file: any) => {
        isShowViewBtn.value = true
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
        isShowViewBtn,
        beforeUpload,
        uploadSuccess,
        uploadError,
        isUploadSuccess,
        isUploading,
      }
    },
  })
</script>
<style lang="postcss"></style>
