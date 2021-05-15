<template>
  <el-select
    class="tl-select"
    :modelValue="modelValue"
    @change="update"
    :placeholder="placeholder"
    :clearable="clearable"
  >
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    ></el-option>
  </el-select>
</template>
<script lang="ts">
  import { defineComponent, onMounted, watchEffect, ref } from 'vue'
  import { positions } from '@api/server/position'

  export default defineComponent({
    name: 'TlOpsition',
    props: {
      initialOption: {
        type: Array,
        required: false
      },
      modelValue: {
        type: [String, Boolean, Number],
      },
      placeholder: {
        type: String,
        required: false,
      },
      clearable: {
        type: Boolean,
        default: true,
        requried: false,
      }
    },
    emits: ['update:modelValue', 'onChange'],

    setup(props, context) {
      const options = ref<OptionData[]>([])

      /*
      watchEffect(() => {
        if (!props.initialOption) return
        options.value = (props.initialOption as any) || []
      })
      */

      const update = (value: string | number | boolean) => {
        context.emit('update:modelValue', value)
        context.emit('onChange', value)
      }

      const getOptoins = async () => {
        console.log('get options')
        const resData = (await positions({ silent: true })).data
        options.value = resData.map((item: any) => ({ value: item.id, label: item.name }))
      }

      const init = () => {
        console.log('init')
        getOptoins()
      }

      onMounted(() => void init())

      return { update, options }
    },
  })
</script>

<style lang="postcss">
  .tl-select {
    & .el-input {
      width: 120px;
    }
  }
</style>
