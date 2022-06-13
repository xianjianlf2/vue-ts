<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="user"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

// const userCount = computed(() => store.state.system.userCount)
</script>

<style scoped lang="less"></style>
