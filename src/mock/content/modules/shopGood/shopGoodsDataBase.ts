import type { ShopGoodDataBase } from '../../types'

let shopGoodsDataBase: Array<ShopGoodDataBase> = []

export function getShopGoodsDataBase(id?: number) {
  shopGoodsDataBase = JSON.parse(localStorage.getItem('shopGoodDataBase') || '[]') || []
  return id ? shopGoodsDataBase.filter(shopGood => shopGood.id === id) : shopGoodsDataBase
}
export function getAllShopGoods4UserId(userId: number) {
  shopGoodsDataBase = JSON.parse(localStorage.getItem('shopGoodDataBase') || '[]') || []
  return shopGoodsDataBase.filter(shopGood => shopGood.userId === userId)
}
export function addShopGood(shopGood: ShopGoodDataBase) {
  shopGoodsDataBase.push(shopGood)
  localStorage.setItem('shopGoodDataBase', JSON.stringify(shopGoodsDataBase))
}
export function deleteShopGood(id: number) {
  const i = shopGoodsDataBase.findIndex(u => u.id === id)
  if (i !== -1) {
    shopGoodsDataBase.splice(i, 1)
    localStorage.setItem('shopGoodDataBase', JSON.stringify(shopGoodsDataBase))
  }
  else {
    warn(`no find id : ${id}`)
  }
}
