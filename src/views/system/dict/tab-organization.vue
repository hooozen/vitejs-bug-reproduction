<template>
  <div class="tab-page">
    <el-dialog v-model="dialogVisible" :title="dialogData.title">
      <el-form
        label-width="80px"
        ref="formEl"
        :model="formData"
        :value="formData"
        :rules="formRules"
      >
        <el-form-item label="上级组织" prop="parentId">
          <el-cascader
            :options="[options]"
            :props="{ checkStrictly: true, emitPath: false }"
            v-model="formData.parentId"
            clearable
          ></el-cascader>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="formData.name" prop="name"></el-input>
        </el-form-item>
        <el-form-item label="代码" prop="code">
          <el-input v-model="formData.code" prop="name"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm"> 确 定 </el-button>
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
          <span>
            <a @click.stop="showDialog(data, 'add')">添加</a>
            <a
              v-if="+data.id"
              style="color: inherit"
              @click.stop="showDialog(data, 'edit')"
            >
              编辑
            </a>
            <a
              v-if="+data.id"
              style="color: red"
              @click.stop="removeIndustry(data)"
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
  import { defineComponent, ref, reactive, onMounted, computed } from 'vue'

  import { add, update, remove, getTree } from "@api/server/organization"
  import { OrganizationNode } from './tree'

  const formRules = {
    name: [{
      required: true, message: '请填写组织名称'
    }],
    code: [{
      required: true, message: '请填写组织代码'
    }],
    parentId: [{
      required: true, message: '请选择上级组织'
    }]
  }

  export default defineComponent({
    name: 'tab-insduties',
    setup() {

      const isLoading = ref(true)

      const industries = ref<OrganizationNode[]>([])
      const organizationTree = computed(() => {
        return {
          code: 'root',
          name: '全部组织',
          id: '0',
          children: industries.value || undefined,
          parentId: -1
        }
      })

      const formEl = ref(null)
      const dialogVisible = ref(false)
      const formData = reactive<OrganizationNode>({
        code: '',
        name: '',
        id: '0',
        parentId: '0',
      })
      const dialogData = reactive({
        type: '',
        get title() {
          return this.type === 'add' ? '添加组织' : '编辑组织'
        }
      })
      const options = computed(() => {
        const setBasicFiled = (_node: any) => {
          return {
            label: _node.name,
            value: _node.id,
          }
        }

        const configOptions = (node: OrganizationNode): any => {

          if (formData.id === node.id) return {
            ...setBasicFiled(node),
            disabled: true
          }

          if (!node.children || !node.children.length) return setBasicFiled(node)

          return {
            ...setBasicFiled(node),
            children: node.children.map(child => configOptions(child))
          }
        }
        const res = configOptions(organizationTree.value as any)
        console.log(res)
        return res
      })

      const getIndustries = async () => {
        industries.value = (await getTree()).data
        isLoading.value = false
      }

      const showDialog = (data: OrganizationNode, type: string) => {
        dialogData.type = type
        if (type === 'add') {
          formData.parentId = data.id!
          formData.code = ''
          formData.name = ''
          formData.id = undefined!
        } else {
          formData.id = data.id!
          formData.parentId = data.parentId!
          formData.name = data.name
          formData.code = data.code
        }
        dialogVisible.value = true
      }

      const submitForm = async () => {
        (formEl.value as any).validate(async (valid: Boolean) => {
          console.log(formData)
          if (!valid) return false
          dialogData.type === 'add' ?
            await add(formData, '添加成功') :
            await update(formData as any, '更新成功')
          getIndustries()
          dialogVisible.value = false
        })
      }

      const removeIndustry = async (data: OrganizationNode) => {
        const res = await remove({ id: data.id! }, {
          successMsg: '删除成功',
          confirmConfig: {
            text: `该操作将删除该组织，${data.children?.length ? `及其下 ${data.children.length} 个子组织，` : ''} 是否继续？`
          }
        })
        if (res) getIndustries()
      }

      onMounted(async () => {
        await getIndustries()
      })

      return {
        organizationTree, isLoading, options,
        dialogVisible, dialogData, showDialog,
        formEl, formRules, formData,
        submitForm, removeIndustry
      }
    },
  })
</script>

