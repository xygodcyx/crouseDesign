import type { MockjsRequestOptions } from 'mockjs'
import { getGoodsDataBase } from './goodsDataBase'

export function getGoodsData(req: MockjsRequestOptions) {
  const { id } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取成功'
  const data = getGoodsDataBase(+id)
  return {
    code,
    data,
    msg,
  }
}
