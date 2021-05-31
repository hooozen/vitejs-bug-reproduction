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
  import { defineComponent, onMounted, PropType } from 'vue'

  export default defineComponent({
    name: 'TlSelect',
    props: {
      options: {
        type: Array as PropType<any[]>,
        required: true
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
      const update = (value: string | number | boolean) => {
        context.emit('update:modelValue', value)
        context.emit('onChange', value)
      }
      onMounted(() => { })
      return { update }
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
