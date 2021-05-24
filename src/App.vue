<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent, provide } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {},
    setup() {
      // provide('baseURL', import.meta.env.VITE_TEST_API_BASE_URL)
      provide('baseURL', '')
    }
  })
</script>

<style lang="scss">
  html,
  body {
    height: 100%;
  }
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
    height: 100%;
  }
</style>