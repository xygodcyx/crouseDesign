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
export function getShopGood4GoodIdAndUserId(goodId: number, userId: number): ShopGoodDataBase | null {
  shopGoodsDataBase = JSON.parse(localStorage.getItem('shopGoodDataBase') || '[]') || []
  return shopGoodsDataBase.find(shopGood => shopGood.good.id === goodId && userId === shopGood.userId) || null
}
function CheckUserHasDuplicateShopGood(shopGood: ShopGoodDataBase): boolean {
  let result = false
  shopGoodsDataBase = JSON.parse(localStorage.getItem('shopGoodDataBase') || '[]') || []
  shopGoodsDataBase.forEach((_shopGood) => {
    if (_shopGood.userId === shopGood.userId && _shopGood.good.id === shopGood.good.id) {
      result = true
    }
  })
  return result
}
function getShopGoodIndex(shopGood: ShopGoodDataBase): number {
  let result = -1
  shopGoodsDataBase = JSON.parse(localStorage.getItem('shopGoodDataBase') || '[]') || []
  result = shopGoodsDataBase.findIndex(_shopGood => _shopGood.userId === shopGood.userId && _shopGood.good.id === shopGood.good.id)
  return result
}
export function addShopGood(shopGood: ShopGoodDataBase) {
  if (!CheckUserHasDuplicateShopGood(shopGood)) {
    shopGoodsDataBase.push(shopGood)
  }
  else {
    const i = getShopGoodIndex(shopGood)
    if (i !== -1) {
      shopGoodsDataBase[i] = shopGood
      shopGoodsDataBase[i].sum = shopGood.quantity * shopGood.good.newPrice
    }
  }
  localStorage.setItem('shopGoodDataBase', JSON.stringify(shopGoodsDataBase))
}
export function deleteShopGood(id: number) {
  shopGoodsDataBase = JSON.parse(localStorage.getItem('shopGoodDataBase') || '[]') || []
  const i = shopGoodsDataBase.findIndex(u => u.id === id)
  if (i !== -1) {
    shopGoodsDataBase.splice(i, 1)
    localStorage.setItem('shopGoodDataBase', JSON.stringify(shopGoodsDataBase))
  }
  else {
    warn(`no find id : ${id}`)
  }
}
