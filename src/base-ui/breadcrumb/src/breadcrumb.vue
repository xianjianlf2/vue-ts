<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { IBreadcrumb } from '../types'
import { defineProps, PropType } from 'vue'

const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style></style>
