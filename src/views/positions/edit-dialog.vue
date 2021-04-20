<template>
  <el-dialog
    :title="title"
    custom-class="position-dialog"
    :close-on-click-modal="false"
    :show-close="false"
    :model-value="visible"
  >
    <el-form
      :model="formData"
      ref="formEl"
      :rules="formRules"
      label-width="80px"
    >
      <el-form-item label="职位名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="职位权限" prop="functionIds">
        <el-cascader
          :options="allPrivileges"
          :props="{
            multiple: true,
            emitPath: false,
            children: 'functions',
            value: 'id',
            label: 'name',
          }"
          v-model="formData.functionIds"
          collapse-tags
          clearable
        ></el-cascader>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="formData.description" type="textarea"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts">
  import { computed, defineComponent, onBeforeUpdate, onMounted, ref } from 'vue'
  import { privileges, AddParams, add, } from '@api/server/position'

  const formRules = {
    name: [{
      required: true,
      message: '请输入职位名称'
    }],
    functionIds: [{
      required: true,
      message: '请选择职位权限'
    }]
  }

  export default defineComponent({
    name: 'EditDialog',
    props: {
      visible: {
        type: Boolean,
        required: true,
      },
      data: {
        type: Object,
        required: true,
      }
    },
    emits: ['update:visible'],

    setup(props, context) {
      console.log(props)

      const visible = computed(() => props.visible)

      let allPrivileges = ref([])

      const formEl = ref(null)

      /*
      const formData = ref<AddParams>({
        description: '',
        functionIds: [],
        name: '',
      })
      */
      const title = computed(() => props.data.title)

      const formData = ref(props.data.formData)

      onBeforeUpdate(() => {
        console.log('before updated', props.data.formData)
        formData.value = props.data.formData
      })

      const getAllPrivileges = async () => {
        allPrivileges.value = (await privileges()).data
      }

      const submitForm = () => {
        (formEl.value as any).validate((valid: boolean) => {
          if (valid) {
            add(formData.value, '添加成功')
            context.emit('update:visible', false)
            resetForm()
          } else {
            return false
          }
        })
      }

      const cancel = () => {
        context.emit('update:visible', false)
        resetForm()
      }

      const resetForm = () => {
        (formEl.value as any).resetFields();
      }

      onMounted(() => {
        getAllPrivileges()
      })
      return { title, visible, allPrivileges, formData, submitForm, formRules, formEl, cancel }
    },
  })
</script>
<style lang="postcss">
  .position-dialog {
    max-width: 400px;
  }
</style>
