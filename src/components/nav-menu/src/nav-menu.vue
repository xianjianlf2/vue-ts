<template>
  <div class="nav-menu">
    <div class="nav-title">
      <img src="~@/assets/img/logo.svg" class="logo" alt="" />
      <span class="title" v-show="!props.collapse">后台管理系统</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="props.collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon" :class="item.icon">
                <component :is="splitIcon(item.icon)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <!-- index去重 -->
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItemClick(subItem)"
              >
                <el-icon v-if="subItem.icon" :class="subItem.icon">
                  <component :is="splitIcon(subItem.icon)"></component>
                </el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :key="item.id">
            <el-icon v-if="item.icon" :class="item.icon">
              <!-- 动态icon组件 -->
              <component :is="splitIcon(item.icon)"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed, defineProps, withDefaults } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const userMenus = computed(() => store.state.login.userMenus)
const props = withDefaults(
  defineProps<{
    collapse: boolean
  }>(),
  {
    collapse: false
  }
)

// 切割图标
const splitIcon = computed(() => {
  return function (icon: string) {
    return icon.split('el-icon-')[1]
  }
})

const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? 'not-found'
  })
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  width: 100%;
  .nav-title {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    .logo {
      width: 28px;
      height: 30px;
      margin-right: 10px;
    }
    .title {
      color: #fff;
      font-weight: 700;
    }
  }
  .el-menu {
    border-right: 0;
    .el-menu-item:hover {
      color: #fff;
      background-color: #1c3146;
    }
    .el-sub-menu .el-menu-item {
      padding-left: 50px !important;
      background-color: #15293c;
    }
    .el-menu-item.is-active {
      color: #fff;
      background: #0a60bd;
    }
  }
}
// 激活菜单一级图标颜色
.el-menu--collapse .el-sub-menu.is-active i {
  color: var(--el-color-primary);
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 50px);
}
</style>
