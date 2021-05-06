<template>
  <el-input
    class="tl-search"
    :modelValue="keyword"
    :placeholder="placeholder"
    @input="$emit('update:keyword', $event)"
  >
    <template v-if="keywordTypes" #prepend>
      <el-select
        :modelValue="keywordType"
        @change="$emit('update:keywordType', $event)"
      >
        <el-option
          v-for="opt in keywordTypes"
          :key="opt.value"
          :label="opt.label"
          :value="opt.value"
        >
        </el-option>
      </el-select>
    </template>
    <template v-if="showSearchBtn" #append>
      <el-button @click="$emit('search', keyword, keywordType)">
        <i class="el-icon-search"></i>
      </el-button>
    </template>
  </el-input>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'TlSearch',
    emits: ['search', 'update:keyword', 'update:keywordType'],
    props: {
      keyword: {
        type: String,
        required: false,
      },
      keywordType: {
        type: [Number, String],
        required: false
      },
      keywordTypes: {
        type: Array,
        required: false
      },
      showSearchBtn: {
        type: Boolean,
        default: false,
        required: false
      },
      placeholder: {
        type: String,
        default: '请输入'
      }
    },
    setup(props) {
    },
  })
</script>

<style lang="postcss">
  .tl-search {
    &.el-input {
      width: 300px;
    }
    & .el-select .el-input {
      width: 100px;
    }
  }
</style>
