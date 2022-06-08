<template>
  <div class="not-found">
    <el-card class="box-card">
      <el-result
        icon="warning"
        title="Oops~,404 Not Found"
        sub-title="找不到该路由地址"
      >
        <template #extra>
          <el-button type="primary" @click="back">返回上一页</el-button>
        </template>
      </el-result>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const back = () => {
  router.back()
}
</script>

<style scoped lang="less">
.not-found {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  .box-card {
    width: 480px;
    align-items: center;
    justify-content: center;
  }
}
</style>
