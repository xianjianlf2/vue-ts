import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'xian',
      age: 11
    }
  },
  mutations: {
    changeName(state) {
      state.name
    }
  },
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
