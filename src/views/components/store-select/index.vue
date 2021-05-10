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
  import { defineComponent, onMounted, ref, watchEffect } from 'vue'
  import { getByKeyword } from '@/api/server/store'
  import { watch } from 'node:fs'

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
      },
      initialOption: {
        type: Array,
        required: false
      }
    },
    emits: ['update:modelValue'],

    setup(props, context) {
      const loading = ref<Boolean>(false)
      const options = ref<OptionData[]>([])

      const remoteMethod = async (query: string) => {
        if (query !== '') {
          loading.value = true
          const res = (await getByKeyword({ name: query, current: 0, size: 10 }, { silent: true })).data
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
        context.emit('update:modelValue', value)
      }

      watchEffect(() => {
        if (!props.initialOption) return
        console.log(props.initialOption)
        options.value = (props.initialOption as any) || []
      })

      const init = () => {
      }

      onMounted(() => void init())

      return { updateValue, options, remoteMethod, loading }
    },
  })
</script>
