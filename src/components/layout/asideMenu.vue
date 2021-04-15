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
          :uniqueOpened="true"
          default-active="1"
          :router="true"
          class="el-menu-outer"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <component
            v-for="menu in menus"
            :index="menu.path"
            :key="menu.id"
            :is="menu.children.length ? 'el-submenu' : 'el-menu-item'"
          >
            <template #title>
              <i :class="`el-icon-${menu.icon}`"></i>
              <span>{{ menu.label }}</span>
            </template>
            <el-menu-item
              v-for="subMenu in menu.children"
              :key="subMenu.id"
              :to="subMenu.path"
              :index="subMenu.path"
            >
              {{ subMenu.label }}
            </el-menu-item>
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
import { useRouter } from "vue-router";

  export default defineComponent({
    name: "AsideMenu",
    components: {
      ElSubmenu,
    },
    setup() {
      const isCollapse = ref(false);
      const router = useRouter();
      const asideCls = computed(() => {
        return {
          width: isCollapse.value ? "64px" : "200px",
        };
      });
      const handleSelect = (index: string, indexPath: string):void => {
        router.push(index)
      }
      return { isCollapse, asideCls, menus, handleSelect };
    },

    methods: {
      handleOpen(key: string, keyPath: [string]) {
      },
      handleClose(key: string, keyPath: [string]) {
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
