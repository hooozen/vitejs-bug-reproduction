<template>
  <div class="tl-transfer">
    <div class="tl-transfer-main" style="margin-right: 20px">
      <div class="tl-transfer-title">
        待选择（{{ selected }}/{{ currentNum }}）
      </div>
      <div class="tl-transfer-serarch">
        <el-input v-model="keyword" size="small">
          <template #append>
            <el-button
              size="small"
              icon="el-icon-search"
              @click="search"
            ></el-button>
          </template>
        </el-input>
      </div>
      <div class="tl-transfer-nav">
        <div
          v-if="navs.length"
          class="tl-transfer-nav-item text-btn"
          @click="navJumpTo(-1)"
        >
          全部
        </div>

        <div v-else class="tl-transfer-nav-item">全部</div>
        <template v-for="(nav, i) in navs" :key="nav.value">
          <i class="el-icon-arrow-right"></i>
          <div
            v-if="i < navs.length - 1"
            class="tl-transfer-nav-item text-btn"
            style="margin: 0"
            @click="navJumpTo(i)"
          >
            {{ nav.label }}
          </div>
          <div v-else class="tl-transfer-nav-item">
            {{ nav.label }}
          </div>
        </template>
      </div>
      <div class="tl-transfer__list">
        <el-table
          ref="tableEl"
          @selection-change="onSelectionChange"
          :data="isShowSearchResult ? visibleSearchResult : leftTableData"
          empty-text="无数据或已被全选"
          height="100%"
          :stripe="true"
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="name" label="区域/门店名称"></el-table-column>
          <el-table-column label="操作" width="60px" align="center">
            <template #default="scope">
              <span
                v-if="!scope.row.orgId && !isShowSearchResult"
                class="text-btn"
                @click="navToChild(scope.row)"
                >下级</span
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="tl-transfer-main">
      <div class="tl-transfer-title">
        已选择（{{ selected }}/{{ currentNum }}）
      </div>
      <div class="tl-transfer__list">
        <el-table :data="selectedPrivileges" height="100%" :stripe="true">
          <el-table-column prop="name" label="区域/门店名称"></el-table-column>
          <el-table-column label="操作" width="60px" align="center">
            <template #default="scope">
              <span class="text-btn" @click="removePrivilege(scope.row)">
                移除
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  /* note
    由于后端未提供较好的接口支持，前端需要分别调用获取"组织"和"门店"的接口，加之交互逻辑的复杂，这个组件的实现有些复杂
    1. “组织”列表可以通过一次调用接口获得，门店列表需要每次展开组织列表时获取，然后插入到所属的父组织中去.
    2. 由于 Element 没有提供方便的改变 Table 列选择状态的方法，待选列表中被选中后则从该列表移除，
       展示在右侧已选列表中。这样既避免处理重选、“下级”等操作（父节点被选中后该操作已无意义），也符合交互习惯（更强的提示效果）
  */
  import { computed, defineComponent, onMounted, ref, nextTick } from 'vue'

  import { getTree, getByKeyword as getOrgByKeyword } from '@api/server/organization'
  import { getByOrg, getByKeyword as getStoreByKeyword } from '@api/server/store'

  export default defineComponent({
    name: 'tl-transfer',
    props: {
      data: {
        type: Array,
        required: false,
      },
      selected: {
        type: Number,
        default: 0,
        required: false,
      },
      currentNum: {
        type: Number,
        default: 0,
        required: false,
      },
    },
    emits: ['onSelectedChange'],
    setup(props, context) {

      onMounted(() => init())

      const init = async () => {
        localTree.value = (await getTree(0)).data
      }

      const localTree = ref<any[]>([])
      const navs = ref<{ value: number, label: string }[]>([])

      const checkPrivilegeIsSelected = (privilege: any): boolean => {
        return selectedPrivileges.value.some(p => p.id == privilege.id && p._type == privilege._type)
      }

      const leftTableData = computed(() => {
        let res = localTree.value
        for (let nav of navs.value) {
          res = res.find((node => node.id == nav.value)).children
        }
        res = res.filter((item: any) => !checkPrivilegeIsSelected(item))
        return res
      })

      const navToChild = async (data: any) => {
        await getStoreChldren(data)
        navs.value.push({ label: data.name, value: data.id })
      }

      const navJumpTo = (index: number) => {
        isShowSearchResult.value = false
        if (index == navs.value.length - 1) return
        navs.value = navs.value.slice(0, index + 1)
      }


      let gotChildrenOfParent: number[] = []

      const getStoreChldren = async (parent: any) => {
        if (gotChildrenOfParent.includes(parent.id)) return false
        const children = (await getByOrg(parent.id)).data.map((store: any) => ({ ...store, _type: 2 }))
        console.log(children, 'new children')
        parent.children = (parent.children || []).concat(children)
        gotChildrenOfParent.push(parent.id)
      }

      // search
      const tableEl = ref()
      const searchResult = ref<any[]>([])
      const isShowSearchResult = ref<boolean>(false)
      const keyword = ref<string>('')
      const visibleSearchResult = computed(() => {
        return searchResult.value
          .filter(((p: any) => !checkPrivilegeIsSelected(p)))
      })
      const search = async () => {
        const _keyword = keyword.value
        const [orgRes, storeRes] = await Promise.all([
          getOrgByKeyword({ keyword: _keyword }),
          getStoreByKeyword({ name: _keyword, size: 10, current: 1 })
        ])
        searchResult.value = orgRes.data
          .concat(storeRes.data.records?.map((item: any) => ({ ...item, _type: 2 })))
        isShowSearchResult.value = true
        navs.value = [{ label: '搜索结果', value: -2 }]
      }


      // selecting and removing handler
      const selectedPrivileges = ref<any[]>([])
      const onSelectionChange = (value: any[]) => {
        value.forEach(newP => {
          if (selectedPrivileges.value.find(p => p.id == newP.id && p._type == newP._type)) return
          selectedPrivileges.value.push(newP)
          newP._isSelected = true
        })
        context.emit('onSelectedChange', getSelectedPrivileges())
      }

      const removePrivilege = (data: any) => {
        for (let i = 0; i < selectedPrivileges.value.length; i++) {
          if (data.id == selectedPrivileges.value[i].id && data._type == selectedPrivileges.value[i]._type) {
            selectedPrivileges.value[i]._isSelected = false
            selectedPrivileges.value.splice(i, 1)
          }
        }
        context.emit('onSelectedChange', getSelectedPrivileges())
      }

      const getSelectedPrivileges = (): any => {
        const length = selectedPrivileges.value.length
        if (!length) return false
        return selectedPrivileges.value
          .map(item => ({ privilegeId: item.id, type: item._type || 1 }))
      }

      return {
        keyword, search, leftTableData, navToChild, navs, onSelectionChange, navJumpTo, selectedPrivileges, removePrivilege, isShowSearchResult,
        tableEl, searchResult, visibleSearchResult,
      }
    },
  })
</script>
<style lang="scss">
  .tl-transfer {
    display: flex;
    width: 600px;
  }
  .tl-transfer-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 400px;
  }
  .tl-transfer__list {
    flex: 1;
  }
  .tl-transfer-nav {
    display: flex;
    align-items: center;
  }
  .tl-transfer-nav-item {
    line-height: 30px;
  }
</style>

