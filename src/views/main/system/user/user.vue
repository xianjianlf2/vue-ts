<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'
import { IFormItem } from '@/base-ui/form'
import { computed } from 'vue'

// pageModal 相关的hook逻辑
// 处理密码的逻辑

const newCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  if (passwordItem) {
    passwordItem.isHidden = false
  }
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  if (passwordItem) {
    passwordItem.isHidden = true
  }
}

// 动态添加部门和角色列表
const store = useStore()
const modalConfigRef = computed(() => {
  const roleOption: IFormItem | undefined = modalConfig.formItems?.find(
    (item) => item.field === 'roleId'
  )
  roleOption!.options = store.state.entireRoles.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  const departmentOption: IFormItem | undefined = modalConfig.formItems?.find(
    (item) => item.field === 'departmentId'
  )
  departmentOption!.options = store.state.entireDepartments.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  return modalConfig
})

// 调用hook获取公共变量和函数
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  newCallback,
  editCallback
)
</script>

<style scoped></style>
