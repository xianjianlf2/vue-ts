import { createStore } from 'vuex'
import { IRootState } from './types'
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

export default store
