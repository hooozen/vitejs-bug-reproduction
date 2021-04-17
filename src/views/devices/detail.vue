<template>
  <div class="detail-view device-detail">
    <nav-bar class="detail-nav" title="设备详情">
      <el-button size="small">修改</el-button>
    </nav-bar>
    <div class="detail-main">
      <div class="detail-overview"></div>
      <div class="device-map">
        <div class="map-title">设备经纬度</div>
        <t-map :center="location" :markers="[location]" class="map-outer"></t-map>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import NavBar from '../components/navBar/index.vue'
  import TMap from '../components/TMap/index.vue'

  const deviceLocation = [23.166028, 113.308253]

  export default defineComponent({
    components: {
      NavBar,
      TMap,
    },
    setup() {
      const location = ref(deviceLocation)
      return {location}
    }
  })
</script>
<style lang="postcss">
</style>

