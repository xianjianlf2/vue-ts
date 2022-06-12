<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <div class="content">
      <mx-table
        :listData="userList"
        :title="title"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
      >
        <!-- header中的插槽 -->
        <template #headerHandler>
          <el-button type="primary" size="medium">新建用户</el-button>
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
  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { useStore } from '@/store'
import { computed } from 'vue'
import MxTable from '@/base-ui/table'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)

const title = '用户列表'
const propList = [
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '真实姓名', minWidth: '100' },
  { prop: 'cellphone', label: '手机号码', minWidth: '100' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt'
  },
  { label: '操作', minWidth: '120', slotName: 'handler' }
]

const showIndexColumn = true
const showSelectColumn = true
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
