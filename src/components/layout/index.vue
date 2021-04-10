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
import { ref, defineComponent } from "vue";
import AsideMenu from "./asideMenu.vue";

export default defineComponent({
  name: "Layout",
  components: {
    AsideMenu,
  },
  data() {
    return {
      menuCollapse: false,
    };
  },
  setup: () => {},
});
</script>
<style>
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
  overflow: hidden;
  border-right: solid 1px #e6e6e6;
  background-color: #3a3f51;
}
.main {
  flex: 1;
  background: #fff;
}
.header {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-bottom: solid 1px #e6e6e6;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.user {
  display: flex;
}
.user-face {
  background: url(@/assets/logo.png) 0 0 /40px 40px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 5px 10px;
}
</style>
