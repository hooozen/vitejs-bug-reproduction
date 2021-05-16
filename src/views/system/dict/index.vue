<template>
  <div class="organizations tabs-view">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="组织管理" name="organization">
        <tab-organization></tab-organization>
      </el-tab-pane>
      <el-tab-pane label="标签管理" name="tag">
        <tab-tag></tab-tag>
      </el-tab-pane>
      <el-tab-pane label="酒名管理" name="beer">
        <tab-beer></tab-beer>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"
  import TabOrganization from './tab-organization.vue'
  import TabTag from './tab-tag.vue'
  import TabBeer from './tab-beer.vue'

  export default defineComponent({
    components: {
      TabOrganization,
      TabTag,
      TabBeer
    },
    setup() {
      const activeTab = ref("organization")
      return { activeTab }
    },
  })
</script>

<style lang="postcss">

</style>
<style lang="postcss">
  .organizations {
  }
</style>
