import type { MockjsRequestOptions } from 'mockjs'
import { getOrderDataBase } from './orderDataBase'

export function getOrderData4Id(req: MockjsRequestOptions) {
  const { id } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取订单成功'
  const data = getOrderDataBase(id)
  return {
    code,
    data,
    msg,
  }
}
