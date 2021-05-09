<template>
  <el-table :data="propeties"> </el-table>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getByDeviceTypeId } from '@api/server/deviceService'

  export default defineComponent({
    name: 'DeviceServiceTable',
    props: {
      id: {
        required: true,
        type: [String, Number]
      }
    },
    setup(props) {
      const services = ref<{ [key: string]: any }>([])
      const getServeices = async () => {
        services.value = getByDeviceTypeId(props.id)
      }

      const init = () => {
        getServeices()
      }

      onMounted(() => void init())

      return { services }
    },
  })
</script>

