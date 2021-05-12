<template>
  <div class="detail-view user-detail">
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
            <el-form-item prop="id" label="账号名称:">
              <el-input v-model="formData.fullName"></el-input>
            </el-form-item>
            <el-form-item prop="fullName" label="用户密码:">
              <el-input v-model="formData.fullName"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="手机号码:">
              <el-input v-model="formData.sex"></el-input>
            </el-form-item>
            <el-form-item prop="nation" label="用户编号:">
              <el-input v-model="formData.nation"></el-input>
            </el-form-item>
            <el-form-item prop="mobile" label="所属运营商:">
              <el-input v-model="formData.mobile"></el-input>
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 200px">
            <el-form-item label="账户失效时间" prop="joinedDate">
              <el-date-picker
                v-model="formData._joinedDate"
                type="date"
                placeholder="入职日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="_censusDistrict" label="备注:">
              <el-input type="textarea"></el-input>
            </el-form-item>
            <el-form-item prop="_houseDistrict" label="职位:"> </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue'

  import { ElMessage } from 'element-plus'

  import NavBar from '../../components/nav-bar/index.vue'
  import TlAddress from '../../components/address/index.vue'
  import TlSelect from '../../components/selector/index.vue'
  import TlOrganization from '../../components/org-select/index.vue'
  import TlOperator from '../../components/operator-select/index.vue'

  import { add, UserAddParams, UserUpdateParams, update, getById } from '@/api/server/user'
  import { getByStoreId } from '@api/server/device'

  import { useRoute } from 'vue-router'

  import options from './options'
  import formRules from './formRules'
  import { blankFormData as formDataTemplate, generateFormData, } from './formDataTemplate'

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
      const formData = ref<AddParams>({} as any)
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

      const updateFormDistrictName = (value: string[], name: string[]) => {
      }

      const setFormData = async () => {
        if (!id.value) return
        const originalForm = (await getById(id.value as string)).data
        formData.value = generateFormData(originalForm)
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
        devices,
      }
    },
  })
</script>
<style lang="postcss">
  .user-detail {
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
