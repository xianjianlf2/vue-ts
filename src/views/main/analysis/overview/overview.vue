<template>
  <div class="menu">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    >
      <template #jumpToServer="scope">
        <el-button @click="handleJump(scope.row)">跳转</el-button>
      </template>
      <template #copyPassword="scope">
        <el-button @click="handleCopy(scope.row.password)">复制</el-button>
      </template>
      <template #copyAccount="scope">
        <el-button @click="handleCopy(scope.row.account)">复制</el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/use-page-search'
import { ElMessage } from 'element-plus'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

const handleCopy = (item: any) => {
  const oInput = document.createElement('textarea')
  oInput.value = item
  document.body.appendChild(oInput)
  oInput.select() // 选择对象;
  document.execCommand('Copy') // 执行浏览器复制命令
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
  oInput.remove()
}

const handleJump = (item: any) => {
  const { url, port } = item
  window.open(`${url}:${port}`, '_blank')
}
</script>

<style scoped lang="less"></style>
