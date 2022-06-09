<template>
  <div class="nav-menu">
    <div class="nav-title">
      <img src="~@/assets/img/logo.svg" class="logo" alt="" />
      <span class="title" v-show="!props.collapse">后台管理系统</span>
    </div>
    <el-menu
      :default-active="defaultValue"
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
import { computed, defineProps, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

// store
const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)

// router
const router = useRouter()
const route = useRoute()
const currentPath = route.path

// 展开
const menu = pathMapToMenu(userMenus.value, currentPath)
const defaultValue = ref(menu.id + '')
const props = defineProps({
  collapse: { type: Boolean, default: false }
})

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
    color: #fff;
    border-right: 0;

    .el-menu-item:hover {
      background-color: #0a60bd;
    }
    .el-sub-menu,
    .el-menu-item {
      // padding-left: 5px !important;
      background-color: #0c2135;
    }
    .el-sub-menu {
      .el-icon {
        color: #fff;
      }
      span {
        color: #fff;
      }
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
