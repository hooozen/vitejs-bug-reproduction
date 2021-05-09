<template>
  <div class="container-outer">
    <div class="container">
      <div class="aside-outer">
        <aside-menu :isCollapse="menuCollapse"></aside-menu>
      </div>
      <div class="main">
        <div class="header">
          <div class="user">
            <el-popover
              placement="bottom"
              :width="40"
              trigger="click"
              content="退出"
            >
              <template #reference>
                <span>admin</span>
              </template>
            </el-popover>

            <div class="user-face"></div>
          </div>
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
  import { ref, defineComponent } from 'vue'
  import AsideMenu from './components/asideMenu.vue'

  export default defineComponent({
    name: 'Layout',
    components: {
      AsideMenu,
    },
    data() {
      return {
        menuCollapse: false,
      }
    },
    setup: () => { },
  })
</script>
<style lang="postcss">
  @import url(./common.css);

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
  }
  .view-outer {
    flex: 1;
    height: calc(100% - 50px);
    & .text-btn {
      text-decoration: none;
      color: #409eff;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 8px;
      }
      &:hover {
        color: #66b1ff;
      }
    }
    & .text-btn--warning {
      color: red;
      &:not(:first-child) {
        margin-left: 8px;
      }
    }
  }
  .user {
    display: flex;
  }
  .user-face {
    background: url(@/assets/face.jpeg) 0 0 /40px 40px;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin: 5px 10px;
  }
</style>
