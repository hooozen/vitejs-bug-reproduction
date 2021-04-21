<template>
  <div class="tl-address">
    <el-cascader
      :modelValue="district"
      @change="changeSelection"
      :props="config"
    >
    </el-cascader>
    <el-input
      :modelValue="addressDetail"
      @input="changeAddressDetail"
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
      modelValue: {
        type: Array
      },
    },
    emits: ['update:modelValue', 'change'],

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

      const addressDetail = computed<string>(() => {
        return ((props.modelValue && props.modelValue[0]) || '') as string
      })

      const district = computed<string[]>(() => {
        return (props.modelValue && props.modelValue.slice(1)) as string[]
      })

      const changeSelection = (value: Array<string>) => {
        const fullAddress = ([] as string[]).concat(addressDetail.value, value)
        context.emit('update:modelValue', fullAddress)
        context.emit('change', fullAddress)
      }

      const changeAddressDetail = (value: string) => {
        const fullAddress = ([] as string[]).concat(value, district.value)
        context.emit('update:modelValue', fullAddress)
        context.emit('change', fullAddress)
      }

      return { config, changeSelection, changeAddressDetail, district, addressDetail }
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
