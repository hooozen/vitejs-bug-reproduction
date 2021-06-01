const setToken = (token: string): void => {
  sessionStorage.setItem('token', token)
}

const getToken = (): string | null => {
  return sessionStorage.getItem('token')
}

const setUserInfo = (userInfo: { [key: string]: any }): void => {
  console.log(userInfo)
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
}

const getUserInfo = (): { [key: string]: any } | null => {
  const res = sessionStorage.getItem('userInfo')
  return res && JSON.parse(res)
}

const clearUserInfo = (): void => {
  sessionStorage.removeItem('userInfo')
}

export { setToken, getToken, setUserInfo, getUserInfo, clearUserInfo }
