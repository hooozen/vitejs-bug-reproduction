import { createStore } from 'vuex'

import menus from '@store/menus'
import { MenuItem } from '@store/menus'
import localAPI from '@api/local'

interface State {
  menus: MenuItem[],
  token: string | null,
}

const store = createStore({
  state() {
    const state: State = {
      token: null,
      menus,
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

