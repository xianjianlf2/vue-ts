<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
</script>

<style scoped lang="less"></style>
