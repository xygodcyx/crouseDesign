import type { MockjsRequestOptions } from 'mockjs'
import { deleteOrder } from './orderDataBase'

export function deleteOrderData(req: MockjsRequestOptions) {
  const { id } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '删除订单成功'
  const data = deleteOrder(id)
  return {
    code,
    data,
    msg,
  }
}
