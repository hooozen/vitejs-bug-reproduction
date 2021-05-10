<template>
  <el-form
    :model="formData"
    :rules="formRules"
    label-width="100px"
    ref="formEl"
  >
    <el-form-item label="功能名称" prop="name">
      <el-input v-model="formData.name"></el-input>
    </el-form-item>
    <el-form-item label="标识符" prop="identifier">
      <el-input v-model="formData.identifier"></el-input>
    </el-form-item>
    <el-form-item label="数据类型" prop="dataType.type">
      <el-select v-model="formData.dataType.type">
        <el-option
          v-for="opt in options.dataTypes"
          :key="opt.value"
          :label="opt.label"
          :value="opt.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-if="lengthInputVisible"
      label="文本最大长度"
      prop="dataSpecsLength"
    >
      <el-input-number
        v-model="formData.dataType.dataSpecsLength"
        :step-strictly="true"
        :max="1024"
        :min="0"
        :step="1"
      ></el-input-number>
    </el-form-item>
    <el-form-item v-if="rangeInputVisible" label="取值范围">
      <el-input-number
        v-model="formData.dataType.dataSpecsMin"
        :controls="false"
      ></el-input-number>
      至
      <el-input-number
        v-model="formData.dataType.dataSpecsMax"
        :controls="false"
      ></el-input-number>
    </el-form-item>
    <el-form-item v-if="rangeInputVisible" label="步长" props="dataSpecsStep">
      <el-input-number
        v-model="formData.dataType.dataSpecsStep"
        :controls="false"
      ></el-input-number>
    </el-form-item>
    <el-form-item v-if="rangeInputVisible" label="单位" prop="unit">
      <el-input v-model="formData.dataType.dataSpecsUnit"></el-input>
    </el-form-item>
    <el-form-item label="读写类型" prop="accessMode">
      <el-radio label="r" v-model="formData.accessMode">只读</el-radio>
      <el-radio label="rw" v-model="formData.accessMode">读写</el-radio>
    </el-form-item>
    <el-form-item label="描述" prop="description">
      <el-input
        type="textarea"
        v-model="formData.description"
        maxlength="100"
      ></el-input>
    </el-form-item>
    <el-button @click="submitForm">确定</el-button>
  </el-form>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, watchEffect } from 'vue'
  import options from '../options'

  import { add, update } from '@api/server/deviceProperty'

  const formRules = {
    name: [{ required: true, message: '请输入功能名称' }],
    identifier: [{ required: true, message: '请输入标识符' }],
    'dataType.type': [{ required: true, message: '请选择数据类型' }],
  }

  export default defineComponent({
    name: 'DevicePropertyForm',
    props: {
      formData: {
        type: Object,
        required: false,
        default: { dataType: {} },
      },
      isAdd: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    emits: ['submitSuccess'],
    setup(props, context) {
      /*
      const formData = ref(props.formData)
      console.log(formData)

      watchEffect(() => {
        console.log(props.isAdd)
        formData.value = props.formData
      })
      */

      const formData = props.formData

      const rangeInputVisible = computed(() => {
        const type = formData.dataType.type
        if (type === 'int32' || type === 'float' || type === 'double') return true
        delete formData.dataType.dataSpecsMax
        delete formData.dataType.dataSpecsMin
        delete formData.dataType.dataSpecsStep
        delete formData.dataType.dataSpecsUnit
        delete formData.dataType.dataSpecsUnitName
        return false
      })
      const lengthInputVisible = computed(() => {
        if (formData.dataType.type === 'text') return true
        delete formData.dataSpecsLength
        return false
      })

      const formEl = ref()

      const submitForm = () => {
        formEl.value.validate(async (valid: boolean) => {
          if (!valid) return false
          formData.dataType.dataSpecsUnitName = formData.dataType.dataSpecsUnit
          console.log(formData)
          if (props.isAdd) await add(formData as any, '新增属性成功')
          context.emit('submitSuccess')
        })
      }

      return { options, rangeInputVisible, lengthInputVisible, formData, submitForm, formRules, formEl }
    },
  })
</script>

