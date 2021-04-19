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
          :props="{ label: 'name', children: 'children' }"
          :data="organizations.children"
          node-key="id"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <a @click="showDialog(data, 'add')">添加</a>
                <a style="color: inherit" @click="showDialog(data, 'edit')">
                  编辑
                </a>
                <a style="color: red" @click="removeOrganization(data)">删除</a>
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
  import { getAll, add, getByParentId, update, remove } from "@api/server/organizations"
  import { ADDRGETNETWORKPARAMS } from "node:dns"

  interface OrganizationNode {
    code: string,
    id?: number,
    name: string,
    parentId?: number,
    children?: []
  }

  const breadthTravel = (tree: any[], level: number, condition: (node: any) => boolean, callback?: (parent: any, index?: number, target?: any) => any): any => {
    if (level === 1) {
      for (let i = 0; i < tree.length; i++) {
        if (!condition(tree[i])) continue
        callback && callback(tree, i, tree[i])
        return { target: tree[i], targetIndex: i, parent: tree }
      }
      callback && callback(tree)
      return false
    }
    for (let subTree of tree) {
      return breadthTravel(subTree.children, level - 1, condition, callback)
    }
  }

  export default defineComponent({
    setup() {

      const activeTab = ref("organization")
      const organizations = ref<OrganizationNode>({ code: 'all', name: '所有组织', children: [] })

      const dialogVisible = ref(false)
      const dialogData = reactive({
        type: '',
        superiorName: ''
      })

      /*
      const getOrganizations = async() => {
        organizations.value = (await getAll()).data
      }
      */

      const getOrganizations = async (parent: any, parentId: number = 0) => {
        const children = (await getByParentId({ parentId })).data
        if (children.length > 0) {
          parent.children = children
          children.forEach((child: any) => getOrganizations(child, child.id))
        }
      }

      const addForm = reactive<OrganizationNode>({
        code: '',
        name: '',
        id: 0,
        parentId: 0,
      })

      const updateTreeData = (type: 'load' | 'add' | 'remove' | 'update', subTree: OrganizationNode, level: number) => {
        switch (type) {
          case 'load':
            breadthTravel(organizations.value, level, node => true, parent => { parent.children = subTree })
            break;
          case 'add':
            breadthTravel(organizations.value, level, node => true, parent => { parent.children.push(subTree) })
            break
          case 'remove':
            breadthTravel(organizations.value, level, node => node.id === subTree.id, (parent, i) => { parent.splice(i, 1) })
            break
          case 'update':
            breadthTravel(organizations.value, level, node => node.id === subTree.id, (parent, i) => { parent.splice(i, 1, subTree) })
            break
        }
      }

      const loadChildren = async (node: any, resolve: any) => {
        const children = (await getByParentId({ parentId: node.key || 0 })).data
        updateTreeData('load', children, node.level + 1)
        console.log(organizations.value)
        resolve(children)
      }

      const showDialog = (data: OrganizationNode, type: string) => {
        dialogData.type = type
        if (type === 'add') {
          dialogData.superiorName = data.name
          addForm.parentId = data.id!
          addForm.code = ''
          addForm.name = ''
          addForm.id = undefined
        } else {
          console.log(data)
          dialogData.superiorName = data.parentName
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
        dialogVisible.value = false
      }
      const removeOrganization = async (data: OrganizationNode) => {
        await remove({ id: data.id! })
      }

      onMounted(async () => {
        const rootNode = { children: [] }
        await getOrganizations(rootNode)
        console.log(rootNode)
        organizations.value = rootNode.children
        console.log(organizations.value)
      })

      return {
        loadChildren,
        activeTab, organizations,
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
