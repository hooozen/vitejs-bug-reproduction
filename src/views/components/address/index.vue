<template>
  <el-cascard v-model="fullAddr">
  </el-cascard>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getDistrict } from '@api/external/TencentMap'

export default defineComponent({
  name: 'TlAddrSelect',
  setup() {
    const fullAddr = ref()
  },
})
</script>

