import type { MockjsRequestOptions } from 'mockjs'
import { getAllShopGoods4UserId } from './shopGoodsDataBase'

export function getAllShopGoodData4UserId(req: MockjsRequestOptions) {
  const { userId } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取成功'
  const data = getAllShopGoods4UserId(userId)
  return {
    code,
    data,
    msg,
  }
}
