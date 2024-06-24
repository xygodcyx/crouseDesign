import type { MockjsRequestOptions } from 'mockjs'
import { getShopGood4GoodIdAndUserId } from './shopGoodsDataBase'

export function getShopGoodData4GoodIdAndUserId(req: MockjsRequestOptions) {
  const { goodId, userId } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取成功'
  const data = getShopGood4GoodIdAndUserId(goodId, userId)
  return {
    code,
    data,
    msg,
  }
}
