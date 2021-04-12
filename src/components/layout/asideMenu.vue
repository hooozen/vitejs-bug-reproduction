<template>
  <transition>
    <div :style="asideCls" class="aside">
      <div class="menu__head">
        <i
          class="menu-toggle"
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="isCollapse = !isCollapse"
        ></i>
        <div class="head-logo"></div>
      </div>
      <el-scrollbar class="aside__body">
        <el-menu
          background-color="#3a3f51"
          text-color="#fff"
          active-text-color="#4f94d4"
          default-active="1"
          class="el-menu-outer"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <component
            v-for="menu in menus"
            :index="'' + menu.id"
            :key="menu.id"
            :is="menu.children.length ? 'el-submenu' : 'el-menu-item'"
          >
            <i v-if="!menu.children.length" :class="`el-icon-${menu.icon}`"></i>
            <template #title>
              <i v-if="menu.children.length" :class="`el-icon-${menu.icon}`"></i>
              <router-link :to="menu.path">{{ menu.label }}</router-link>
            </template>
            <template v-if="menu.children.length">
              <el-menu-item
                v-for="subMenu in menu.children"
                :key="subMenu.id"
                :index="'' + subMenu.id"
              >

              <router-link :to="subMenu.path">{{ subMenu.label }}</router-link>
              </el-menu-item>
            </template>
          </component>
        </el-menu>
      </el-scrollbar>
    </div>
  </transition>
</template>

<script lang="ts">
import { ref, defineComponent, computed, inject } from "vue";
import { ElSubmenu } from "element-plus";
// @ts-ignore
import menus from "@/menus/index";

export default defineComponent({
  name: "AsideMenu",
  components: {
    ElSubmenu,
  },
  setup() {
    const api =  inject('api');
    const isCollapse = ref(false);
    const asideCls = computed(() => {
      return {
        width: isCollapse.value ? "64px" : "200px",
      };
    });
    return { isCollapse, asideCls, menus };
  },

  methods: {
    handleOpen(key: string, keyPath: [string]) {
      console.log(key, keyPath);
    },
    handleClose(key: string, keyPath: [string]) {
      console.log(key, keyPath);
    },
  },
});
</script>

<style lang="postcss">
.aside {
  transition: width ease-in 0.25s;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.aside .aside__body {
  box-sizing: border-box;
  border-top: 1px solid #545c64;
  margin-top: 50px;
  height: calc(100% - 50px);
  padding-bottom: 20px;
}
.menu__head {
  position: absolute;
  width: 200px;
  top: 0;
  right: 0;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  color: #fff;
  align-items: center;
}
.menu-toggle {
  flex: 0 0 64px;
  text-align: center;
  font-size: 26px;
  color: #fff;
}
.el-menu-outer {
  border-right: none !important;
  & a {
    color: inherit;
    text-decoration: none;
  }
}
.aside-fold {
  width: 200px;
}
.head-logo {
  height: 30px;
  margin: 10px 0;
  width: 120px;
  background: url(@/assets/logo.png) center center / contain no-repeat;
}
</style>
