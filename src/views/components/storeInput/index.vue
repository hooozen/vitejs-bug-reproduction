<template>
  <el-select
    :modelValue="modelValue"
    @change="updateValue"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    props: {
      modelValue: {
        type: [String, Number],
      },
      placeholder: {
        type: String,
        default: '输入门店名称',
      }
    },
    emits: ['update:modelValue'],

    setup(props, context) {
      const loading = ref<Boolean>(false)
      const options = ref<OptionData[]>([])

      const remoteMethod = (query: string) {
        if (query !== '') {
          loading.value = true;
          setTimeout(() => {
            loading.value = false;
            options.value = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
      const updateValue = (value: string | number) => {
        context.emit('update:modelValue', value)
      }
      return { updateValue }
    },
  })
</script>
