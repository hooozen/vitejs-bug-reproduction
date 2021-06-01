<template>
  <div class="container-outer">
    <div class="container">
      <div class="aside-outer">
        <aside-menu :isCollapse="menuCollapse"></aside-menu>
      </div>
      <div class="main">
        <div class="header">
          <el-popover placement="bottom" :width="40" trigger="click">
            <template #reference>
              <div class="user-bar">
                <span>{{ userInfo.loginName }}</span>
                <div class="user-face"></div>
              </div>
            </template>
            <span class="text-btn" @click="logOut">注销登录</span>
          </el-popover>
          <i class="el-icon-message-solid" style="margin-right: 20px"></i>
        </div>
        <div class="view-outer">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import AsideMenu from './components/asideMenu.vue'
  import { clearUserInfo } from '@api/local'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'Layout',
    components: {
      AsideMenu,
    },
    setup: () => {
      const store = useStore()
      const router = useRouter()
      const menuCollapse = ref<boolean>(false)
      const userInfo = computed<{ [key: string]: any }>(() => store.getters.userInfo)
      const logOut = () => {
        store.commit('setUserInfo')
        router.push('login')
      }
      return { menuCollapse, userInfo, logOut }
    },
  })
</script>
<style lang="scss">
  // @import url(./common.scss);

  .header-logo {
    position: absolute;
    left: 0;
    width: 200px;
    height: 50px;
    text-align: left;
    display: flex;
  }
  .header-logo i {
    color: #909399;
    color: #fff;
    text-align: center;
    flex: 0 0 64px;
    font-size: 30px;
    line-height: 50px;
  }
  .container-outer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    color: #606266;
    color: #fff;
  }
  .aside-outer {
    border: none;
    background-color: #32353e;
  }
  .main {
    display: flex;
    flex: 1;
    background: #fff;
    flex-direction: column;
    overflow: hidden;
  }
  .header {
    flex: 0 0 50px;
    height: 50px;
    width: 100%;
    line-height: 50px;
    background-color: #32353e;
    box-shadow: 0 2px 2px rgb(0 0 0 / 5%), 0 1px 0 rgb(0 0 0 / 5%);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    .user-bar {
      display: flex;
      cursor: pointer;
    }
    .user-face {
      background: url(@/assets/face.jpeg) 0 0 /40px 40px;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      margin: 5px 10px;
    }
  }
  .view-outer {
    flex: 1;
    height: calc(100% - 50px);
  }
</style>
