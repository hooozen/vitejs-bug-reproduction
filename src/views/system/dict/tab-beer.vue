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
      :data="[beerTree]"
      :default-expanded-keys="[0]"
      v-loading="isLoading"
      node-key="id"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a v-if="data.id == '0'" @click.stop="showDialog(data, 'add')"
              >添加</a
            >
            <a
              v-if="+data.id"
              style="color: inherit"
              @click.stop="showDialog(data, 'edit')"
            >
              编辑
            </a>
            <a v-if="+data.id" style="color: red" @click.stop="removeBeer(data)">
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

  import { add, update, remove, getByKeyword } from "@/api/server/beer"
  import { BeerNode } from './tree'

  const formRules = {
    name: [{
      required: true, message: '请填写酒名'
    }],
    code: [{
      required: true, message: '请填写酒名代码'
    }],
  }

  export default defineComponent({
    name: 'tab-beer',
    setup() {

      const isLoading = ref(true)

      const beers = ref<BeerNode[]>([])
      const beerTree = computed(() => {
        return {
          code: 'root',
          name: '全部酒名',
          id: '0',
          children: beers.value || undefined,
        }
      })
      const getBeers = async () => {
        beers.value = (await getByKeyword()).data
        isLoading.value = false
      }
      const removeBeer = async (data: BeerNode) => {
        await remove(data.id!)
        getBeers()
      }

      const formEl = ref(null)
      const dialogVisible = ref(false)
      const formData = reactive<BeerNode>({
        code: '',
        name: '',
        id: '0',
      })
      const dialogData = reactive({
        type: '',
        get title() {
          return this.type === 'add' ? '添加酒名' : '编辑酒名'
        }
      })

      const showDialog = (data: BeerNode, type: string) => {
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
          getBeers()
          dialogVisible.value = false
        })
      }

      const init = async () => {
        getBeers()
      }

      onMounted(() => void init())

      return {
        beerTree, isLoading,
        dialogVisible, dialogData, showDialog,
        formEl, formRules, formData,
        submitForm, removeBeer
      }
    },
  })
</script>

