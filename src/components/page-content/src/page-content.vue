<template>
  <div class="page-content">
    <mx-table
      :listData="dataList"
      v-bind="props.contentTableConfig"
      :listCount="dataCount"
    >
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
        <!-- <el-icon><Refresh /></el-icon> -->
      </template>

      <!-- 表单中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <el-button size="small" type="text"
          ><el-icon><Edit /></el-icon>编辑</el-button
        >
        <el-button size="small" type="text"
          ><el-icon> <Delete /> </el-icon>删除</el-button
        >
      </template>
    </mx-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from '@/store'
import { computed } from 'vue'
import MxTable from '@/base-ui/table'

const props = defineProps({
  contentTableConfig: { type: Object, required: true },
  pageName: { type: String, required: true }
})

// 网络请求
const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})

// vuex中获取数据
const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const dataCount = computed(() =>
  store.getters[`system/pageListCount`](props.pageName)
)
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
