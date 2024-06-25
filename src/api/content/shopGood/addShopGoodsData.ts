import type { ShopGoodDataBase } from '~/mock/content/types'

export async function addShopGoodsData(shopGood?: ShopGoodDataBase) {
  return (await request.post('/addShopGoodsData', { shopGood })).data
}
