<template>
  <el-cascader v-model="fullAddr" :props="config"> </el-cascader>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { getDistrict } from '@api/server/common'
  import { getDeep as getDistrictDeep } from './districtFunc'

  export default defineComponent({
    name: 'TlAddrSelect',
    setup() {
      const fullAddr = ref()
      const config = ref({
        label: 'fullname',
        lazy: true,
        lazyLoad(node: any, resolve: any) {
          const { level } = node
          const deep = node.data.id ? getDistrictDeep(node.data.id) : 4
          console.log(level, deep)
          if (level >= deep) {
            resolve()
          } else {
            getDistrict(node.data.id || '').then(_res => {
              const res = level == deep - 1 ? _res.data.map((item: any) => {
                return { leaf: true, ...item }
              }) : _res.data
              console.log(res)
              resolve(res)
            })
          }
        }
      })
      return { config, fullAddr }
    },
  })
</script>

