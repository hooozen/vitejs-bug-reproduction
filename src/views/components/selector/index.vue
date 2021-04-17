<template>
  <el-select class="tl-select" :modelValue="modelValue" @change="update">
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    ></el-option>
  </el-select>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue'

  export default defineComponent({
    name: 'TlSelect',
    props: {
      options: {
        type: Array,
        required: true
      },
      modelValue: {
        type: [String, Boolean, Number],
      }
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      console.log(props.modelValue)
      const update = (value: string | number | boolean) => {
        context.emit('update:modelValue', value)
      }
      onMounted(() => { })
      return { update }
    },
  })
</script>

<style lang="postcss">
  .tl-select {
    & .el-input {
      width: 100px;
    }
  }
</style>
