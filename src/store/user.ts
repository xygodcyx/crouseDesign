import { defineStore } from 'pinia'
import { UserDataBase } from '~/mock/user/types'

export const useUserStore = defineStore('user', () => {
  const isLogin = useLocalStorage('isLogin', false)
  const userInfo = useLocalStorage<UserDataBase>('userInfo', new UserDataBase('', ''))
  function logout() {
    isLogin.value = false
    // 清除用户信息
    userInfo.value = new UserDataBase('', '')
  }
  return { isLogin, userInfo, logout }
})
