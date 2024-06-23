import type { MockjsRequestOptions } from 'mockjs'
import { getShopGoodsDataBase } from './shopGoodsDataBase'

export function getShopGoodsDataBaseData(req: MockjsRequestOptions) {
  const { id } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取成功'
  const data = getShopGoodsDataBase(id)
  return {
    code,
    data,
    msg,
  }
}
