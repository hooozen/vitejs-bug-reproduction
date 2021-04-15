import { createStore } from 'vuex'

import menus from '@store/menus'
import { MenuItem } from '@store/menus'
import localAPI from '@api/local'

interface State {
  menus: MenuItem[],
  token: string,
}

const store = createStore({
  state() {
    const state: State = {
      token: '',
      menus,
    }
    return state
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

