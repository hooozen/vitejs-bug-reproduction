<template>
  <div class="organizations tabs-view">
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="组织管理" name="organization">
        <tab-organizations></tab-organizations>
      </el-tab-pane>
      <el-tab-pane label="行业管理" name="industry"> </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"
  import TabOrganizations from './TabOrganizations.vue'

  export default defineComponent({
    components: {
      TabOrganizations,
    },
    setup() {
      const activeTab = ref("organization")
      return { activeTab }
    },
  })
</script>

<style lang="postcss">
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;

    & a {
      color: #409eff;
      cursor: pointer;
      text-decoration: none;
      margin: 0 4px;
    }
  }
</style>
<style lang="postcss">
  .organizations {
  }
</style>
