import { createStore } from 'vuex'

import menu from '@/store/menu'
import { MenuItem } from '@/store/menu'
import localAPI from '@api/local'

interface State {
  menu: MenuItem[],
  token: string | null,
}

const store = createStore({
  state() {
    const state: State = {
      token: null,
      menu,
    }
    return state
  },
  getters: {
    token(state: State) {
      return state.token || localAPI.getToken()
    }
  },
  mutations: {
    setToken(state: State, token) {
      console.log(token)
      state.token = token
      localAPI.setToken(token)
    }
  }
})

export default store

