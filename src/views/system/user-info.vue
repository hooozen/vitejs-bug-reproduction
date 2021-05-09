<template>
  <div class="user-info">
    <el-form label-width="80px" :disabled="true" size="small">
      <el-form-item label="用户名:" prop="loginName">
        <el-input v-model="userInfo.loginName"></el-input>
      </el-form-item>
      <el-form-item label="联系方式:" prop="mobile">
        <el-input v-model="userInfo.mobile"></el-input>
      </el-form-item>
      <el-form-item label="备注:" prop="description">
        <el-input type="area" v-model="userInfo.description"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { currentUser } from '@api/server/user'

  export default defineComponent({
    setup() {
      const userInfo = ref({
        name: '',
        mobile: '',
        description: '',
      })
      const init = async () => {
        const resData = (await currentUser()).data
        userInfo.value = resData.user
      }
      onMounted(() => void init())

      return { userInfo }
    },
  })
</script>

