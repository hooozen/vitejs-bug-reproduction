<template>
  <el-input
    class="tl-search"
    :modelValue="modelValue"
    @input="$emit('update:modelValue', $event)"
  >
    <template #append>
      <el-buttton @click="$emit('search', modelValue)">
        <i class="el-icon-search"></i>
      </el-buttton>
    </template>
  </el-input>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'TlSearch',
    emits: ['search', 'update:modelValue'],
    props: {
      modelValue: {
        type: String,
        required: true,
      }
    },
    setup() {
    },
  })
</script>

<style lang="postcss">
  .tl-search {
    &.el-input {
      width: 180px;
    }
  }
</style>
