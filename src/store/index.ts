import { createStore } from 'vuex'

import menu from '@/store/menu'
import { MenuItem } from '@/store/menu'
import { clearUserInfo, getUserInfo, setUserInfo } from '@api/local'

interface State {
  menu: MenuItem[],
  token: string | null,
  userInfo: { [key: string]: any },
}
const initialUserInfo = {
  id: null,
  loginName: null,
  token: null,
  currentUserResponse: {
    user: {
      id: null,
      loginName: null,
      mobile: null,
      expireDate: null,
      code: null,
      description: null,
      operatorName: null
    },
    role: {
      id: null,
      name: null,
      description: null,
      type: null,
      functions: []
    },
    operator: null
  }
}

const store = createStore({
  state() {
    const state: State = {
      token: null,
      menu,
      userInfo: getUserInfo() || initialUserInfo,
    }
    return state
  },
  getters: {
    token(state: State) {
      return state.userInfo.token
    },
    userInfo(state: State) {
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo(state: State, userInfo?: any) {
      if (!userInfo) {
        state.userInfo = initialUserInfo
        clearUserInfo()
      } else {
        state.userInfo = userInfo
        setUserInfo(userInfo)
      }
    },
  }
})




export default store

