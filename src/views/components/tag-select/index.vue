<template>
  <el-select
    :modelValue="modelValue"
    @change="updateValue"
    filterable
    remote
    :multiple="multiple"
    :clearable="clearable"
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
  import { getByKeyword } from '@/api/server/tag'

  export default defineComponent({
    name: 'TlTag',
    props: {
      modelValue: {
        type: Array,
        required: false,
      },
      placeholder: {
        type: String,
        default: '输入标签',
      },
      clearable: {
        type: Boolean,
        required: false,
        default: true
      },
      multiple: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    emits: ['update:modelValue', 'change'],

    setup(props, context) {
      const loading = ref<Boolean>(false)
      const options = ref<OptionData[]>([])

      const remoteMethod = async (query: string) => {
        console.log(query)
        if (query !== '') {
          loading.value = true
          const res = (await getByKeyword(query, { silent: true })).data
          options.value = res.map((item: any) => ({
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
        context.emit('change', value)
      }
      return { updateValue, options, remoteMethod, loading }
    },
  })
</script>
