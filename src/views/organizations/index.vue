<template>
  <div class="organizations tabs-view">
    <el-dialog
      v-model="dialogVisible"
      :title="dialogData.type === 'add' ? '添加组织' : '编辑组织'"
    >
      <el-form label-width="80px">
        <el-form-item label="上级组织">
          {{ dialogData.superiorName }}
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="addForm.name" prop="name"></el-input>
        </el-form-item>
        <el-form-item label="代码">
          <el-input v-model="addForm.code" prop="name"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addOrganization"> 确 定 </el-button>
        </span>
      </template>
    </el-dialog>
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="组织管理" name="organization">
        <el-tree
          :props="{ key: 'id', label: 'name', children: 'children' }"
          :data="[organizationTree]"
          :default-expanded-keys="[0]"
          v-loading="isLoading"
          node-key="id"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <a @click="showDialog(data, 'add')">添加</a>
                <a v-if="data.id" style="color: inherit" @click="showDialog(data, 'edit')">
                  编辑
                </a>
                <a v-if="data.id" style="color: red" @click="removeOrganization(data)">删除</a>
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
  import { defineComponent, onMounted, ref, reactive } from "vue"
  import { getAll, add, update, remove } from "@api/server/organizations"

  interface OrganizationNode {
    code: string,
    id: number,
    name: string,
    parentId: number,
    parentName?: string,
    children?: OrganizationNode[]
  }

  /*
  const breadthTravel = (node: any, condition: (node: any) => boolean, callback?: (parent: any, index?: number, target?: any) => any): any => {
    if (!node.children) return false
    const children = node.children
    for (let i: number = 0; i < children.length; i++) {
      if (!condition(children[i])) breadthTravel(children[i], condition, callback)
      callback && callback(node, 1, children[i])
      return { parent: node, index: i, target: children[i] }
    }
    return false
  }
  */

  const treeGenerate = (flatArray: any[]): OrganizationNode => {
    const res: OrganizationNode = {
      code: 'root',
      name: '全部组织',
      id: 0,
      children: [],
      parentId: -1
    }
    for (let node of flatArray) {
      if (node.parentId == 0) {
        node.parentName = '无'
        res.children && res.children.push(node)
      } else {
        const parentNode = flatArray.find(el => el.id == node.parentId)
        if (!parentNode) continue
        parentNode.children = parentNode.children || []
        node.parentName = parentNode.name
        parentNode.children.push(node)
      }
    }
    return res
  }

  export default defineComponent({
    setup() {

      const activeTab = ref("organization")
      const isLoading = ref(true)

      const organizationTree = ref<OrganizationNode>({
        code: 'root',
        name: '全部组织',
        id: 0,
        children: [],
        parentId: -1
      })

      const dialogVisible = ref(false)
      const dialogData = reactive({
        type: '',
        superiorName: ''
      })

      const getOrganizations = async () => {
        const flatArray = (await getAll()).data
        organizationTree.value = treeGenerate(flatArray)
        isLoading.value = false
      }

      const addForm = reactive<OrganizationNode>({
        code: '',
        name: '',
        id: 0,
        parentId: 0,
      })

      /*
      const updateTreeData = (type: 'load' | 'add' | 'remove' | 'update', node: OrganizationNode) => {
        switch (type) {
          case 'add':
            breadthTravel(organizationTree, _node => _node.id == node.parentId, parent => {
              parent.children = parent.children || []
              parent.children.push(node)
            })
            break
          case 'remove':
            breadthTravel(organizationTree, _node => _node.id == node.id, (parent, i) => { parent.children.splice(i, 1) })
            break
          case 'update':
            breadthTravel(organizationTree, _node => node.id == node.id, (parent, i) => { parent.splice(i, 1, node) })
            break
        }
      }
      */

      const showDialog = (data: OrganizationNode, type: string) => {
        dialogData.type = type
        if (type === 'add') {
          dialogData.superiorName = data.name
          addForm.parentId = data.id!
          addForm.code = ''
          addForm.name = ''
          addForm.id = undefined!
        } else {
          dialogData.superiorName = data.parentName!
          addForm.id = data.id!
          addForm.parentId = data.parentId!
          addForm.name = data.name
          addForm.code = data.code
        }
        dialogVisible.value = true
      }

      const addOrganization = async () => {
        dialogData.type === 'add' ?
          await add(addForm, '添加成功') :
          await update(addForm, '更新成功')
        getOrganizations()
        dialogVisible.value = false
      }

      const removeOrganization = async (data: OrganizationNode) => {
        await remove({ id: data.id! })
        getOrganizations()
      }

      onMounted(async () => {
        await getOrganizations()
      })

      return {
        activeTab, organizationTree, isLoading,
        dialogVisible, dialogData, showDialog,
        addForm, addOrganization, removeOrganization
      }
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
