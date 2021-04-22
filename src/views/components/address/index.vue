<template>
  <div class="tl-address">
    <el-cascader
      :modelValue="district"
      @change="changeSelection"
      :props="config"
    >
    </el-cascader>
    <el-input
      v-if="full"
      :modelValue="address"
      @input="inputAddress"
      placeholder="详细地址"
    ></el-input>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  import { getDistrict } from '@api/server/common'
  import { getDeep as getDistrictDeep } from './districtFunc'

  export default defineComponent({
    name: 'TlAddress',
    props: {
      full: {
        type: Boolean,
        required: false, 
        default: false
      },
      district: {
        type: Array,
        required: true
      },
      address: {
        type: String,
        required: false
      }
    },
    emits: ['update:district', 'update:address', 'change', 'input'],

    setup(props, context) {
      const config = ref({
        value: 'id',
        label: 'fullname',
        lazy: true,
        lazyLoad(node: any, resolve: any) {
          const { level } = node
          const deep = node.data.id ? getDistrictDeep(node.data.id) : 4
          if (level >= deep) {
            resolve()
          } else {
            getDistrict(node.data.id || '').then(_res => {
              const res = level == deep - 1 ? _res.data.map((item: any) => {
                return { leaf: true, ...item }
              }) : _res.data
              resolve(res)
            })
          }
        }
      })


      const changeSelection = (value: Array<string>) => {
        console.log(value)
        context.emit('update:district', value)
        context.emit('change', value)
      }

      const inputAddress= (value: string) => {
        context.emit('update:address', value)
        context.emit('input', value)
      }

      return { config, changeSelection, inputAddress}
    },
  })
</script>
<style lang="postcss">
  .tl-address {
    & > div:not(:first-child) {
      margin-top: 8px;
    }
  }
</style>
