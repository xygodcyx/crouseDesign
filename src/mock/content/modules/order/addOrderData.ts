import type { MockjsRequestOptions } from 'mockjs'
import { addOrder } from './orderDataBase'

export function addOrderData(req: MockjsRequestOptions) {
  const { orderData } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '添加订单成功'
  const data = addOrder(orderData)
  return {
    code,
    data,
    msg,
  }
}
