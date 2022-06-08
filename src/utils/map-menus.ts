import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 加载所有routes
  // require.context  webpack
  const allRoutes: RouteRecordRaw[] = []

  // require.context must be literals!
  // ../router/main 不能抽取
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const routeFiles = require.context('../router/main', true, /\.ts$/)
  // file path
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}
