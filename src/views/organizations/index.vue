<template>
  <div class="organizations tabs-view">
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="组织管理" name="organization">
        <el-tree
          :props="treeProps"
          :data="organizations"
          lazy
          :load="loadChildren"
          node-key="id"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <a @click="_add(data)">添加</a>
                <a @click="_remove(data)">删除</a>
              </span>
            </span>
          </template>
        </el-tree>
      </el-tab-pane>
      <el-tab-pane label="行业管理" name="industry"> </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue"
  import { add, getByParentId, update, remove } from "@api/server/organizations"
import { resourceLimits } from "node:worker_threads"

  interface OrganizationNode {
    code: string,
    id?: number,
    name: string,
    parentId: number
  }

  export default defineComponent({
    setup() {

      const activeTab = ref("organization")
      const organizations = ref<OrganizationNode[]>([])

      const treeProps = {
        label: 'name'
      }

      const _remove = (data: OrganizationNode) => {
      }

      const loadChildren = async (node: any, resolve: any) => {
        const children = (await getByParentId({parentId: node.key || 0})).data
        resolve(children)
      }

      const _add = (data: OrganizationNode) => {
        add()
      }

      return { activeTab, organizations, _remove, _add, loadChildren, treeProps }
    },
  })
</script>
