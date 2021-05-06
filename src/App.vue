<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {}
  })
</script>

<style lang="postcss">
  html,
  body {
    background-color: #fff;
    background-color: #131620;
    font-size: 16px;
  }
  html,
  body,
  div {
    margin: 0;
    padding: 0;
  }
  #app {
    color: #fff;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    & .el-table {
      background-color: #373e55;
    }

    & .el-table th {
      background-color: #373e55;
    }

    & .el-table tr {
      background-color: #212534;
    }

    & .el-table--striped .el-table__body tr.el-table__row--striped td {
      background-color: #373e55;
    }
  }
  .el-popper.is-light .el-popper__arrow::before {
    background: #373e55 !important;
  }
</style>