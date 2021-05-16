<template>
  <div class="tl-map">
    <el-form inline v-if="showInput" class="location-input">
      <el-form-item label="纬度">
        <el-input-number
          :min="-90"
          :max="90"
          v-model="latitude"
          :controls="false"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="经度">
        <el-input-number
          :min="-180"
          :max="180"
          v-model="longitude"
          :controls="false"
        ></el-input-number>
      </el-form-item>
    </el-form>
    <div class="map-outer">
      <div id="mapOuter" ref="mapOuter"></div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onBeforeUpdate, onMounted, watch, ref, watchEffect } from 'vue'
  import { initMap } from './TMap'

  export default defineComponent({
    name: 'TMap',
    props: {
      center: {
        type: Array,
        required: false
      },
      pointer: {
        type: Array,
        required: false
      },
      markers: {
        type: Array,
        default: [[]],
        required: false
      },
      config: {
        type: Object,
        required: false,
        default: {
          mapStyleId: 'style1',
          zoom: 6
        }
      },
    },
    emits: ['update:pointer'],
    setup(props, context) {
      const mapOuter = ref(null)

      const showInput = computed(() => props.pointer)

      const latitude = computed({
        get() { return props.pointer && props.pointer[0] },
        set(val) {
          const loc = [val, longitude.value]
          context.emit('update:pointer', loc)
        }
      })

      const longitude = computed({
        get() { return props.pointer && props.pointer[1] },
        set(val) {
          const loc = [latitude.value, val]
          context.emit('update:pointer', loc)
        }
      })

      let map: any
      let marker: any

      const setPointer = (loc: number[]) => {
        if (marker) {
          marker.remove(['pointer'])
          marker.add({ id: 'pointer', styleId: 'myStyle', position: new window.TMap.LatLng(+loc[0], +loc[1]) })
        }
      }

      const setCenter = (loc: number[]) => {
        if (map) map.easeTo({ center: new window.TMap.LatLng(loc[0], loc[1]) })
      }


      const handleMapClick = (event: any) => {
        const { lat, lng } = event.latLng
        const pointer = [lat, lng]
        context.emit('update:pointer', pointer)
      }

      onMounted(() => {
        map = initMap(mapOuter.value, props.center as number[], props.config)
        marker = map.setMarkers(props.markers)
        map.on('click', handleMapClick)
      })

      watchEffect(() => {
        setCenter(props.center as any)
        setPointer(props.pointer as any)
      })

      return { mapOuter, latitude, longitude, showInput }
    },
  })
</script>

<style lang="postcss">
  .tl-map {
    & .el-input-number {
      width: 100px;
    }
    & #mapOuter {
      height: 100%;
      width: 100%;
    }
  }
</style>
