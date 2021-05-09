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
      :data="[tagTree]"
      :default-expanded-keys="[0]"
      v-loading="isLoading"
      node-key="id"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a v-if="data.id == '0'" @click.stop="showDialog(data, 'add')">添加</a>
            <a
              v-if="+data.id"
              style="color: inherit"
              @click.stop="showDialog(data, 'edit')"
            >
              编辑
            </a>
            <a v-if="+data.id" style="color: red" @click.stop="removeTag(data)">
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

  import { add, update, remove, getByKeyword } from "@/api/server/tag"
  import { TagNode } from './tree'

  const formRules = {
    name: [{
      required: true, message: '请填写标签名称'
    }],
    code: [{
      required: true, message: '请填写标签代码'
    }],
  }

  export default defineComponent({
    name: 'tab-tag',
    setup() {

      const isLoading = ref(true)

      const tags = ref<TagNode[]>([])
      const tagTree = computed(() => {
        return {
          code: 'root',
          name: '全部标签',
          id: '0',
          children: tags.value || undefined,
        }
      })
      const getTags = async () => {
        tags.value = (await getByKeyword()).data
        isLoading.value = false
      }
      const removeTag = async (data: TagNode) => {
        await remove(data.id!)
        getTags()
      }

      const formEl = ref(null)
      const dialogVisible = ref(false)
      const formData = reactive<TagNode>({
        code: '',
        name: '',
        id: '0',
      })
      const dialogData = reactive({
        type: '',
        get title() {
          return this.type === 'add' ? '添加标签' : '编辑标签'
        }
      })

      const showDialog = (data: TagNode, type: string) => {
        dialogData.type = type
        if (type === 'add') {
          formData.code = ''
          formData.name = ''
          formData.id = undefined!
        } else {
          formData.id = data.id!
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
          getTags()
          dialogVisible.value = false
        })
      }

      const init = async () => {
        getTags()
      }

      onMounted(() => void init())

      return {
        tagTree, isLoading,
        dialogVisible, dialogData, showDialog,
        formEl, formRules, formData,
        submitForm, removeTag
      }
    },
  })
</script>

