<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {}
  })
</script>

<style lang="scss">
  html,
  body,
  div {
    margin: 0;
    padding: 0;
  }
  #app {
    color: #fff;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .el-input.is-disabled .el-input__inner {
      background-color: white;
      border-color: white;
      color: #606266;
      cursor: default;
    }
  }
</style>