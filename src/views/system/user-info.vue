<template>
  <div class="detail-view user-info">
    <div class="detail-main">
      <div class="main-item">
        <div class="main-item-head">
          <div class="main-item-title">用户信息</div>
          <div class="main-item-btns">
            <el-button v-if="editable" @click="submitForm">
              <i class="el-icon-document"> </i>保存
            </el-button>
            <el-button v-else @click="editable = true">
              <i class="el-icon-edit-outline"> </i>编辑
            </el-button>
          </div>
        </div>
        <div class="main-item-body">
          <el-form label-width="100px" :disabled="true" style="flex: 1">
            <el-form-item label="用户名:" prop="loginName">
              <el-input v-model="userInfo.loginName"></el-input>
            </el-form-item>
            <el-form-item label="姓名:" prop="loginName">
              <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式:" prop="mobile">
              <el-input v-model="userInfo.mobile"></el-input>
            </el-form-item>
            <el-form-item label="所属组织:" prop="loginName">
              <el-input v-model="userInfo.operatorName"></el-input>
            </el-form-item>
            <el-form-item label="所属角色:" prop="loginName">
              <el-input v-model="roleInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="备注:" prop="description">
              <el-input type="area" v-model="userInfo.description"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
    setup() {
      const store = useStore()
      const editable = ref<boolean>(false)
      const loginInfo = computed(() => store.getters.userInfo?.currentUserResponse)
      const roleInfo = computed(() => loginInfo.value.role || {})
      const userInfo = computed(() => loginInfo.value.user || {})

      const init = async () => { }

      const submitForm = () => {

      }

      onMounted(() => void init())

      return { roleInfo, userInfo, editable, submitForm }
    },
  })
</script>

