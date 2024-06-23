import type { MockjsRequestOptions } from 'mockjs'
import { addShopGood } from './shopGoodsDataBase'

export function addShopGoodsData(req: MockjsRequestOptions) {
  const { shopGood } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取成功'
  const data = addShopGood(shopGood)
  return {
    code,
    data,
    msg,
  }
}
