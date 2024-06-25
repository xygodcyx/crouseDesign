import type { OrderDataBase } from '~/mock/content'

export async function updateOrderData(orderData: OrderDataBase) {
  return (await request.post('/updateOrderData', { orderData })).data
}
