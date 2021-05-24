<template>
  <div class="detail-view user-detail">
    <nav-bar class="detail-nav" :title="title">
      <el-button v-if="editable" type="primary" @click="submitForm">
        保存
      </el-button>
      <el-button v-else @click="editable = true">编辑</el-button>
    </nav-bar>
    <div class="detail-main">
      <el-form
        :disabled="!editable"
        ref="formEl"
        :rules="formRules"
        :model="formData"
        label-width="120px"
      >
        <div class="main-item">
          <div class="main-item-title">基本信息</div>
          <div class="main-item-body">
            <div class="item-body-column" style="flex-basis: 400px">
              <el-form-item prop="loginName" label="账号名称:">
                <el-input v-model="formData.loginName"></el-input>
              </el-form-item>
              <el-form-item prop="password" label="用户密码:">
                <el-input v-model="formData.password"></el-input>
              </el-form-item>
              <el-form-item prop="mobile" label="手机号码:">
                <el-input v-model="formData.mobile"></el-input>
              </el-form-item>
              <el-form-item prop="code" label="用户编号:">
                <el-input v-model="formData.code"></el-input>
              </el-form-item>
            </div>
            <div class="item-body-column" style="flex-basis: 400px">
              <el-form-item prop="operatorId" label="所属运营商:">
                <tl-operator v-model="formData.operatorId"></tl-operator>
              </el-form-item>
              <el-form-item label="账户失效时间" prop="expireDate">
                <el-date-picker
                  v-model="formData._expireDate"
                  type="date"
                  clearable
                  placeholder="失效时间"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item prop="description" label="备注:">
                <el-input
                  type="textarea"
                  v-model="formData.description"
                ></el-input>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="main-item">
          <div class="main-item-title">职位</div>
          <div class="main-item-body">
            <el-form-item prop="position" label="职位:">
              <tl-position v-model="formData.position"></tl-position>
            </el-form-item>
          </div>
        </div>
        <div class="main-item">
          <div class="main-item-title">权限</div>
          <div class="main-item-body">
            <el-form-item prop="privilege" label="权限:">
              <tl-transfer @onSelectedChange="setPrivileges"> </tl-transfer>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue'

  import NavBar from '../../components/nav-bar/index.vue'
  import TlAddress from '../../components/address/index.vue'
  import TlSelect from '../../components/selector/index.vue'
  import TlOrganization from '../../components/org-select/index.vue'
  import TlOperator from '../../components/operator-select/index.vue'
  import TlPosition from '../../components/position-select/index.vue'
  import TlTransfer from '../../components/transfer/index.vue'

  import { add, UserAddParams, UserUpdateParams, update, getById } from '@/api/server/user'

  import { useRoute } from 'vue-router'

  import options from './options'
  import formRules from './formRules'
  import { blankFormData as formDataTemplate, generateFormData, generateLocalFormData } from './formDataTemplate'
  import { privileges } from '@/api/server/position'

  export default defineComponent({
    components: {
      NavBar,
      TlAddress,
      TlOrganization,
      TlOperator,
      TlSelect,
      TlPosition,
      TlTransfer,
    },
    props: {
      type: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const formData = ref<UserAddParams>({} as any)
      const formEl = ref(null)

      formData.value = formDataTemplate

      const route = useRoute()
      const id = computed(() => route.query.id)

      const editable = ref<boolean>(true)
      // const editable = ref<boolean>(false)
      // if (props.type === 'add') editable.value = true

      const title = computed(() =>
        props.type === 'edit' ? '用户详情' : '新增用户1',
      )

      const submitForm = () => {
        (formEl.value as any).validate(async (valid: any) => {
          if (!valid) return
          const _formData = generateFormData(formData.value)
          console.log('submiting form data: ', _formData)
          if (props.type === 'add') await add(_formData, '新增成功')
          else await update(_formData as UserUpdateParams, '保存成功')
        })
      }

      const setFormData = async () => {
        if (!id.value) return
        const originalForm = (await getById(id.value as string)).data
        formData.value = generateLocalFormData(originalForm)
      }

      const init = async () => {
        setFormData()
      }

      onMounted(async () => void init())

      const setPrivileges = (privileges: any[]) => {
        console.log(privileges)
        formData.value.userPrivileges = privileges;
      }

      return {
        title,
        editable,
        options,
        location,
        formData,
        formRules,
        submitForm,
        formEl,
        setPrivileges,
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
