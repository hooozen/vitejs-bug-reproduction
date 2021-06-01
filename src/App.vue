<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent, onMounted, provide } from 'vue'
  import { getUserInfo } from '@api/local'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'

  export default defineComponent({
    name: 'App',
    components: {},
    setup() {
      provide('baseURL', import.meta.env.VITE_API_BASE_URL)

      const router = useRouter()
      const store = useStore()

      const init = () => {
        const userInfo = getUserInfo()
        if (!userInfo) router.push('login')
        store.commit('setUserInfo', userInfo)
      }

      onMounted(() => void init())
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