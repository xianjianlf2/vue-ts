<template>
  <div class="user">
    <mx-form v-bind="searchFormConfig"></mx-form>

    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import MxForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
</script>

<style scoped></style>
