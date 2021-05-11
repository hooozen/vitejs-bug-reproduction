<template>
  <div class="tl-tags">
    <el-tag
      :key="tag.id"
      v-for="tag in modelValue"
      closable
      :disable-transitions="false"
      @close="removeTag(tag.id)"
    >
      {{ tag.name }}
    </el-tag>
    <el-button v-if="showAddBtn" @click="showAddBtn = false" size="small"
      ><i class="el-icon-plus"></i>添加</el-button
    >
    <el-select
      v-else
      v-model="newTag"
      @change="selectTag"
      filterable
      remote
      :placeholder="placeholder"
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
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import { getByKeyword } from '@/api/server/tag'

  export default defineComponent({
    name: 'TlTags',
    props: {
      modelValue: {
        type: Array,
        default: []
      },
      placeholder: {
        type: String,
        default: '输入标签'
      },
    },
    emits: ['add', 'remove', 'change', 'update:modelValue'],
    setup(props, context) {
      const loading = ref<Boolean>(false)
      const newTag = ref()
      const options = ref<OptionData[]>([])
      const showAddBtn = ref<Boolean>(true)

      const tagIds = computed(() => {
        return props.modelValue.map((tag: any) => tag.id)
      })

      const remoteMethod = async (query: string) => {
        if (query !== '') {
          loading.value = true
          const res = (await getByKeyword(query, { silent: true })).data
          options.value = res.map((item: any) => ({
            value: item.id,
            label: item.name
          }))
          loading.value = false
        } else {
          options.value = [];
        }
      }

      const selectTag = (value: string | number) => {
        if (!value) return
        if (props.modelValue.find((t: any) => t.id == value)) return void (showAddBtn.value = true)
        context.emit('add', value)
        const addingTag = options.value.find(o => o.value == value)
        const _newTags = [...props.modelValue]
        _newTags.push({ id: addingTag?.value, name: addingTag?.label })
        context.emit('change', _newTags)
        context.emit('update:modelValue', _newTags)
        showAddBtn.value = true
      }


      const removeTag = (id: string) => {
        const _newTags = [...props.modelValue]
        const removedTag = _newTags.find((t: any) => t.id == id)
        context.emit('remove', removedTag)
        _newTags.splice(props.modelValue.findIndex((node: any) => node.id == id), 1)
        context.emit('change', _newTags)
        context.emit('update:modelValue', _newTags)
      }

      return { removeTag, options, remoteMethod, loading, selectTag, newTag, showAddBtn }
    },
  })
</script>
<style lang="scss">
  .tl-tags {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .el-button {
      margin-left: 10px;
    }
  }
</style>

