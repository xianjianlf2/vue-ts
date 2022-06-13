import { IRootState } from '../../types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

const pageUrlMap: Map<string, string> = new Map([
  ['user', '/users/list'],
  ['system', '/role/list']
])

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.userList = list
    },
    changeRoleCount(state, count: number) {
      state.userCount = count
    }
  },
  actions: {
    // 发送请求
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = pageUrlMap.get(pageName) || ''

      // 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 数据存到state
      const { list, totalCount } = pageResult.data
      commit(`change${pageName.toUpperCase()}List`, list)
      commit(`change${pageName.toUpperCase()}Count`, totalCount)
    }
  }
}
export default systemModule
