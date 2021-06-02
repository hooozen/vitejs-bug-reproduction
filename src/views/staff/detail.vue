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
            <el-form-item prop="id" label="员工编号:">
              {{ formData.id }}
            </el-form-item>
            <el-form-item prop="fullName" label="姓名:">
              <el-input v-model="formData.fullName"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="性别:">
              <el-radio-group v-model="formData.sex">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="0">女</el-radio>
              </el-radio-group>
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
          <div class="item-body-column" style="flex-basis: 200px">
            <el-form-item label="入职日期" prop="joinedDate">
              <el-date-picker
                v-model="formData._joinedDate"
                type="date"
                placeholder="入职日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="_censusDistrict" label="户籍地址:">
              <tl-address
                v-model:district="formData._censusDistrict"
                v-model:address="formData.censusAddress"
                :deepth="4"
                :full="true"
              ></tl-address>
            </el-form-item>
            <el-form-item prop="_houseDistrict" label="现住地址:">
              <tl-address
                v-model:district="formData._houseDistrict"
                v-model:address="formData.houseAddress"
                :deepth="4"
                :full="true"
              ></tl-address>
            </el-form-item>
            <el-form-item prop="operatorId" label="员工归属:">
              <tl-operator v-model="formData.operatorId"></tl-operator>
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 400px">
            <el-form-item prop="profilePhoto" label="照片:">
              <el-upload
                class="avatar-uploader"
                action="/beer/admin/common/uploadFile"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload"
              >
                <img v-if="avatarUrl" :src="avatarUrl" class="avatar" />
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
  import TlOperator from '../components/operator-select/index.vue'

  import { add, AddParams, UpdateParams, update, getById } from '@/api/server/staff'
  import { getByStoreId } from '@api/server/device'

  import { useRoute } from 'vue-router'

  import options from './options'
  import formRules from './formRules'
  import { blankFormData as formDataTemplate, generateFormData, FormData } from './formDataTemplate'

  import moment from 'moment'

  export default defineComponent({
    components: {
      NavBar,
      TlAddress,
      TlOrganization,
      TlOperator,
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
            if ((v as any) instanceof Date) _formData[k] = moment(v).format('YYYY-MM-DD')
            else _formData[k] = v
          }
          console.log('submiting form data: ', _formData)
          if (props.type === 'add') await add(_formData as AddParams, '新增成功')
          else await update(_formData as UpdateParams, '保存成功')
        })
      }

      const updateFormDistrictName = (e: Event) => {
      }

      const setFormData = async () => {
        if (!id.value) return
        const originalForm = (await getById(id.value as string)).data
        formData.value = generateFormData(originalForm)
      }

      const init = async () => {
        setFormData()
      }

      onMounted(async () => void init())

      const avatarUrl = ref<string>()
      const beforeUpload = (file: File) => {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
          ElMessage.error('只支持 .jpg .png 格式图片')
          return false
        }
      }
      const uploadSuccess = (res: any, file: any) => {
        ElMessage.success('文件上传成功')
        avatarUrl.value = res.data
        formData.value.profilePhoto = res.data
      }
      const uploadError = (e: any) => {
        ElMessage.error(`文件上传失败: ${e}`)
      }

      return {
        title,
        editable,
        options,
        updateFormDistrictName,
        location,
        avatarUrl,
        activeTab,
        formData,
        formRules,
        submitForm,
        formEl,
        beforeUpload,
        uploadSuccess,
        uploadError,
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
