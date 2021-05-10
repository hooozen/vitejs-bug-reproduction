<template>
  <el-table :data="events"> </el-table>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getByDeviceTypeId } from '@api/server/deviceEvent'

  export default defineComponent({
    name: 'DeviceEventTable',
    props: {
      id: {
        required: true,
        type: [String, Number]
      }
    },
    setup(props) {
      const events = ref<{ [key: string]: any }>([])
      const getEvents = async () => {
        events.value = (await getByDeviceTypeId(props.id)).data
      }

      const init = () => {
        getEvents()
      }

      onMounted(() => void init())

      return { events }
    },
  })
</script>

