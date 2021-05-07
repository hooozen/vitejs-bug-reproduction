<template>
  <el-select
    :modelValue="modelValue"
    @change="updateValue"
    filterable
    remote
    :placeholder="placeholder"
    :remote-method="remoteMethod"
    :loading="loading"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { getByKeyword } from '@api/server/stores'

  export default defineComponent({
    name: 'TlStore',
    props: {
      modelValue: {
        type: [String, Number],
        require: false,
      },
      placeholder: {
        type: String,
        default: '输入门店名称',
      }
    },
    emits: ['update:modelValue'],

    setup(props, context) {
      const loading = ref<Boolean>(false)
      const options = ref<OptionData[]>([])

      const remoteMethod = async (query: string) => {
        if (query !== '') {
          loading.value = true
          const res = (await getByKeyword({name: query, current: 0, size: 10})).data
          options.value = res.records.map((item: any) => ({
            value: item.id,
            label: item.name
          }))
          loading.value = false
        } else {
          options.value = [];
        }
      }
      const updateValue = (value: string | number) => {
        console.log(value)
        context.emit('update:modelValue', value)
      }
      return { updateValue, options, remoteMethod, loading }
    },
  })
</script>
