const setToken = (token: string): void => {
  sessionStorage.setItem('token', token)
}

const getToken = (): string | null => {
  return sessionStorage.getItem('token')
}

export default { setToken, getToken }
