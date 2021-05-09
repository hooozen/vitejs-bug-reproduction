<template>
  <div class="organizations tabs-view">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="组织管理" name="organization">
        <tab-organization></tab-organization>
      </el-tab-pane>
      <el-tab-pane label="行业管理" name="industry">
        <tab-industry></tab-industry>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"
  import TabOrganization from './tab-organization.vue'
  import TabIndustry from './tab-industry.vue'

  export default defineComponent({
    components: {
      TabOrganization,
      TabIndustry,
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
