<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { useStore } from '@/store'
import { computed } from 'vue'

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
</script>

<style scoped lang="less"></style>
