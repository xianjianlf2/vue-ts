<template>
  <div class="menu">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
</script>

<style scoped lang="less"></style>
