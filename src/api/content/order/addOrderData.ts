import type { OrderDataBase } from '~/mock/content'

export async function addOrderData(orderData: OrderDataBase) {
  return (await request.post('/addOrderData', { orderData })).data
}
