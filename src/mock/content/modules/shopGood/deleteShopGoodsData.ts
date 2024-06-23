import type { MockjsRequestOptions } from 'mockjs'
import { deleteShopGood } from './shopGoodsDataBase'

export function deleteShopGoodData(req: MockjsRequestOptions) {
  const { id } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取成功'
  const data = deleteShopGood(id)
  return {
    code,
    data,
    msg,
  }
}
