import type { MockjsRequestOptions } from 'mockjs'
import { updateOrder } from './orderDataBase'

export function updateOrderData(req: MockjsRequestOptions) {
  const { orderData } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '更新订单成功'
  const data = updateOrder(orderData)
  return {
    code,
    data,
    msg,
  }
}
