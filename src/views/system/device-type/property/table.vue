<template>
  <el-table :data="propeties"> </el-table>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getByDeviceTypeId } from '@api/server/deviceProperty'

  export default defineComponent({
    name: 'DevicePropertyTable',
    props: {
      id: {
        required: true,
        type: [String, Number]
      }
    },
    setup(props) {
      const properties = ref<{ [key: string]: any }>([])
      const getProperties = async () => {
        properties.value = getByDeviceTypeId(props.id)
      }

      const init = () => {
        getProperties()
      }

      onMounted(() => void init())

      return { properties }
    },
  })
</script>

