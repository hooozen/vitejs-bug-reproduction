<template>
  <div class="tl-map">
    <el-form inline v-if="showInput" class="location-input">
      <el-form-item label="纬度">
        <el-input-number
          :min="-90"
          :max="90"
          v-model="latitude"
          @blur="inputBlur"
          :controls="false"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="经度">
        <el-input-number
          :min="-180"
          :max="180"
          v-model="longitude"
          @blur="inputBlur"
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
  import { computed, defineComponent, onMounted, ref } from 'vue'
  import { initMap } from './TMap'

  export default defineComponent({
    name: 'TMap',
    props: {
      center: {
        type: Array,
        required: true
      },
      pointer: {
        type: Array,
      },
      markers: {
        type: Array,
        default: [[]],
        required: false
      },
      config: {
        type: Object,
        required: false
      },
    },
    emits: ['update:pointer'],
    setup(props, context) {
      const mapOuter = ref(null)
      const { center, config, markers, pointer } = props

      const showInput = computed(() => pointer)

      const latitude = ref<number>()
      const longitude = ref<number>()

      if (pointer) {
        latitude.value = (pointer as any)[0]
        longitude.value = (pointer as any)[1]
      }

      let map: any
      let marker: any

      const setPointer = (loc: number[]) => {
        marker.add({ id: 'pointer', styleId: 'myStyle', position: new window.TMap.LatLng(+loc[0], +loc[1]) })
      }

      const updatePointer = (pointer: number[]) => {
        context.emit('update:pointer', pointer)
        marker.remove(['pointer'])
        setPointer(pointer)
      }

      const handleMapClick = (event: any) => {
        const { lat, lng } = event.latLng
        const pointer = [lat, lng]
        latitude.value = lat
        longitude.value = lng
        updatePointer(pointer)
      }

      const inputBlur = () => {
        const pointer = [latitude.value, longitude.value]
        updatePointer(pointer as number[])
        map.setCenter(pointer)
      }

      onMounted(() => {
        map = initMap(mapOuter.value, center as number[], config)
        marker = map.setMarkers(markers)
        if (pointer) {
          setPointer(pointer as any)
          map.on('click', handleMapClick)
        }
      })


      return { mapOuter, latitude, longitude, inputBlur, showInput }
    },
  })
</script>

<style lang="postcss">
</style>
