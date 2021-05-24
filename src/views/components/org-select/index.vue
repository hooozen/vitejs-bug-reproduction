<template>
  <div class="tl-org">
    <el-cascader
      ref="selectEl"
      :modelValue="modelValue"
      @change="changeSelection"
      :props="config"
      :options="industryOptions"
      :clearable="clearable"
    >
    </el-cascader>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, onMounted } from "vue";
  import { getTree } from "@api/server/organization";

  export default defineComponent({
    name: "TlOrganization",
    props: {
      modelValue: {
        type: [String, Number],
        required: false,
      },
      clearable: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["update:modelValue", "change"],

    setup(props, context) {
      const selectEl = ref(null);
      const industries = ref<OrganizationNode[]>([]);

      const config = {
        emitPath: false,
        checkStrictly: true
      }

      const industryOptions = computed(() => {
        const recuseHanldChildren = ((parent: any) => {
          if (!parent.children?.length) return {
            value: parent.id,
            label: parent.name,
            leaf: true
          }
          return {
            value: parent.id,
            label: parent.name,
            children: parent.children.map((child: any) => recuseHanldChildren(child))
          }
        })
        return industries.value.map((i: any) => recuseHanldChildren(i))
      })

      const getIndustries = async () => {
        industries.value = (await getTree(0)).data;
      };

      onMounted(() => void getIndustries());

      const changeSelection = (value: Array<string>) => {
        context.emit("update:modelValue", value);
        context.emit("change", value);
      };

      return { changeSelection, selectEl, industries, config, industryOptions };
    },
  });
</script>
<style lang="postcss">
  .tl-org {
    & .el-cascader {
      width: 100%;
    }

    & > div:not(:first-child) {
      margin-top: 8px;
    }
  }
</style>
