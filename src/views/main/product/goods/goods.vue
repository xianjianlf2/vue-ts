<template>
  <div class="goods">
    <page-content
      ref="pageContentRef"
      :contentConfig="contentTableConfig"
      pageName="goods"
    >
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.url]"
          fit="cover"
        />
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
</script>

<style scoped></style>
