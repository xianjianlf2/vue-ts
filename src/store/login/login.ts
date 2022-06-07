import { Module } from 'vuex'
import type { IRootState } from '../types'
import type { ILoginState } from './types'
import type { IAccount } from '@/service/login/types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 登录
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      console.log(token)
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      console.log(userInfo)
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 请求用户菜单
      const userMenuResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      console.log(userMenus)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
