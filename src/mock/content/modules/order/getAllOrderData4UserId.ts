import type { MockjsRequestOptions } from 'mockjs'
import { getAllOrder4UserId } from './orderDataBase'

export function getAllOrderData4UserId(req: MockjsRequestOptions) {
  const { userId, orderRequestInfo } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取订单成功'
  const data = getAllOrder4UserId(userId, orderRequestInfo)
  return {
    code,
    data,
    msg,
  }
}
