import type { MockjsRequestOptions } from 'mockjs'
import { updateGood } from './goodsDataBase'

export function updateGoodsData(req: MockjsRequestOptions) {
  const { good } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取成功'
  const data = updateGood(good)
  return {
    code,
    data,
    msg,
  }
}
