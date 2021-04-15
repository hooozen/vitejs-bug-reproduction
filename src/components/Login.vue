<template>
  <div class="login-outer">
    <div class="login">
      <div class="login__head"></div>
      <div class="login__main">
        <div class="login__title">智能啤酒售卖系统</div>
        <el-form :model="loginForm" ref="form" :rules="formRules">
          <el-form-item prop="loginName">
            <el-input
              prefix-icon="el-icon-user"
              placeholder="请输入用户名称"
              v-model="loginForm.loginName"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              type="password"
              placeholder="请输入登陆密码"
              v-model="loginForm.password"
            />
          </el-form-item>
          <el-form-item prop="imageCode">
            <el-input
              class="identifying-code"
              prefix-icon="el-icon-key"
              placeholder="验证码"
              v-model="loginForm.imageCode"
            >
              <template #suffix>
                <img @click="loadCodeImg" ref="codeImg" class="identifying-img" />
              </template>
            </el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form>
      </div>
    </div>
    <div class="copyright">Copyright © All Rights Reserved.</div>
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent, onMounted } from "vue"
  import { login, verificationCode } from '@api/index'
import { useStore } from "vuex";

  export default defineComponent({
    setup() {
      const loginForm = ref({
        loginName: "",
        password: "",
        imageCode: ""
      });
      const formRules = ref({
        loginName: [
          { required: true, message: '请输入登陆名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        imageCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { length: 6, message: '长度为 4 个字符', trigger: 'blur' }
        ]
      })
      const store = useStore()
      const codeImg = ref(null)
      const form = ref(null)
      const submitForm = async () => {
        (form.value as any).validate(async (valid: any) => {
          if (valid) {
            try {
              const res = (await login({ ...(loginForm.value) })).data
              store.commit('setToken', res.token)
            } catch {
              loadCodeImg()
            }

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      const loadCodeImg = async () => {
        const data = await verificationCode({ width: '100', height: '50'})
        // @ts-ignore
        codeImg.value.src = window.URL.createObjectURL(data)
      }
      onMounted(() => {
        loadCodeImg()
      })
      return { loginForm, submitForm, codeImg, form, loadCodeImg, formRules, store };
    },
  });
</script>
<style lang="postcss">
  .login-outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000033;
    & .copyright {
      color: #fff;
      font-size: 30px;
      text-align: center;
      position: absolute;
      bottom: 20px;
    }
    & .login {
      margin-top: -100px;
      flex: 0 0 350px;
    }
    & .login__head {
      height: 140px;
      background: url(@/assets/logo.png) center center / contain no-repeat;
      margin: 10px;
    }
    & .login__main {
      border-radius: 10px;
      background-color: #fff;
      color: #1abc9c;
      padding: 10px 25px 25px;
    }
    & .login__title {
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    & .el-button {
      width: 100%;
      height: 50px;
      font-size: 20px;
      background-color: #1abc9c;
      color: #fff;
    }
    & .identifying-img {
      height: 100%;
      width: 100px;
    }
    & input {
      height: 50px;
    }
    & .el-input__icon {
      line-height: 50px;
      font-size: 20px;
    }
    & .identifying-code {
      & input {
        width: 200px;
      }
      & .el-input__suffix {
        right: 0;
      }
    }
  }
</style>

