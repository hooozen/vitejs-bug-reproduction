<template>
  <div class="home-view">
    <div class="map-bg-outer">
      <t-map
        class="map-bg"
        :center="[38.3227, 105.5525]"
        :config="Mapconfig"
      ></t-map>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import TMap from '../components/TMap/index.vue'

  const _Mapconfig = {
    zoom: 4.8,
    mapStyleId: 'style3',
    pitch: 10
  }

  export default defineComponent({
    components: {
      TMap
    },
    setup() {
      const Mapconfig = ref(_Mapconfig)
      return { Mapconfig }
    },
  })
</script>
<style lang="postcss">
  .home-view {
    position: relative;
    height: 100%;
    width: 100%;
    & .map-bg-outer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    & .map-bg {
      height: 100%;
      width: 100%;
      & .map-outer {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>

