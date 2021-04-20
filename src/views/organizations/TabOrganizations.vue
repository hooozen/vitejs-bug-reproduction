<template>
  <div class="tab-page">
    <el-dialog v-model="dialogVisible" :title="dialogData.title">
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
          <span @click="execute">
            <a @click="showDialog(data, 'add')">添加</a>
            <a
              v-if="data.id"
              style="color: inherit"
              @click="showDialog(data, 'edit')"
            >
              编辑
            </a>
            <a
              v-if="data.id"
              style="color: red"
              @click="removeOrganization(data)"
            >
              删除
            </a>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, onMounted } from 'vue'

  import { getAll, add, update, remove } from "@api/server/organizations"
  import { OrganizationNode, treeGenerate } from './tree'

  export default defineComponent({
    name: 'tab-organizations',
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
        superiorName: '',
        get title() {
          return this.type === 'add' ? '添加组织' : '编辑组织'
        }
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
        const res = await remove({ id: data.id! }, {
          successMsg: '删除成功',
          confirmConfig: {
            text: `该操作将删除该组织，${data.children?.length ? `及其下 ${data.children.length} 个子组织，` : ''} 是否继续？`
          }
        })
        if (res) getOrganizations()
      }

      const execute = (event: Event) => {
        event.stopPropagation()
      }

      onMounted(async () => {
        await getOrganizations()
      })

      return {
        activeTab, organizationTree, isLoading,
        dialogVisible, dialogData, showDialog,
        execute, addForm, addOrganization, removeOrganization
      }
    },
  })
</script>

