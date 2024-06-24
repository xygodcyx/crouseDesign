import type { MockjsRequestOptions } from 'mockjs'
import { getShopGood4GoodId } from './shopGoodsDataBase'

export function getShopGood4GoodIdData(req: MockjsRequestOptions) {
  const { goodId } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取成功'
  const data = getShopGood4GoodId(goodId)
  return {
    code,
    data,
    msg,
  }
}
