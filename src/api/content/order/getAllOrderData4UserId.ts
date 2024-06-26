import type { OrderRequestInfo } from '~/common'

export async function getAllOrderData4UserId(userId: number, orderRequestInfo: OrderRequestInfo) {
  return (await request.post('/getAllOrderData4UserId', { userId, orderRequestInfo })).data
}
