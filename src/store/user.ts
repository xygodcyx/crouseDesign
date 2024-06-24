import { defineStore } from 'pinia'
import { UserDataBase } from '~/mock/user/types'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const isLogin = useLocalStorage('isLogin', false)
  const userInfo = useLocalStorage<UserDataBase>('userInfo', new UserDataBase('', ''))
  function logout() {
    isLogin.value = false
    // 清除用户信息
    userInfo.value = new UserDataBase('', '')
    router.push('/')
  }
  function addShopGoodId(shopGoodId: number) {
    userInfo.value.shopGoodIds.push(shopGoodId)
    userInfo.value.shopGoodIds = [...(new Set(userInfo.value.shopGoodIds))]
  }
  function removeShopGoodId(shopGoodId: number) {
    userInfo.value.shopGoodIds = userInfo.value.shopGoodIds.filter(id => id !== shopGoodId)
    userInfo.value.shopGoodIds = [...(new Set(userInfo.value.shopGoodIds))]
  }
  function addLikeId() {

  }
  function addOrderId() {

  }

  watch(() => userInfo.value, () => {
    updateUser(userInfo.value)
  }, { deep: true })
  return { isLogin, userInfo, logout, addShopGoodId, removeShopGoodId, addLikeId, addOrderId }
})
