<template>
  <div id="mapOuter" ref="mapOuter"></div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  //@ts-ignore
  import { initMap, setMapMarkers } from './TMap.ts'

  export default defineComponent({
    name: 'TMap',
    props: {
      center: {
        type: Array,
        required: true
      },
      markers: {
        type: Array,
        default: [[]],
        required: false
      },
      config : {
        type: Object,
        required: false
      },
    },
    setup(props) {
      const mapOuter = ref(null)
      const {center, config, markers} = props

      onMounted(() => {
        initMap(mapOuter.value, center, config, (map: any) => {
        }).setMarkers(markers)
      })

      return { mapOuter }
    },
  })
</script>

<style lang="postcss">
</style>
