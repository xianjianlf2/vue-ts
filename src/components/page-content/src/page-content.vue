<template>
  <div class="page-content">
    <mx-table
      :listData="pageListData"
      v-bind="props.contentTableConfig"
      :listCount="totalCount"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="default"
          @click="handleNewData"
        >
          {{ props.contentTableConfig?.newBtnTitle ?? '新建数据' }}
        </el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit"
            size="small"
            link
            type="primary"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-delete"
            size="small"
            link
            type="primary"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 3.动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </mx-table>
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  computed,
  defineExpose,
  ref,
  watch,
  defineEmits
} from 'vue'
import { useStore } from '@/store'
import MxTable from '@/base-ui/table'
import { usePermission } from '@/hooks/use-permission'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    require: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['newBtnClick', 'editBtnClick'])

// 获取按钮权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isQuery = usePermission(props.pageName, 'query')
const isDelete = usePermission(props.pageName, 'delete')

const store = useStore()
const pageInfo = ref({ currentPage: 1, pageSize: 10 })

watch(pageInfo, () => {
  getPageData()
})

// 发送请求
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
// vuex获取数据
const pageListData = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const totalCount = computed(() =>
  store.getters[`system/pageListCount`](props.pageName)
)

// 获取动态插槽
const otherPropSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === 'status') {
      return false
    }
    if (item.slotName === 'createAt') {
      return false
    }
    if (item.slotName === 'updateAt') {
      return false
    }
    if (item.slotName === 'handler') {
      return false
    }
    return true
  }
)

// 编辑/删除
const handleDeleteClick = (item: any) => {
  store.dispatch('system/deletePageDataAction', {
    pageName: props.pageName,
    id: item.id
  })
}

// 新建
const handleNewData = () => {
  emit('newBtnClick')
}
const handleEditClick = (item: any) => {
  emit('editBtnClick', item)
}

defineExpose({
  getPageData
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
