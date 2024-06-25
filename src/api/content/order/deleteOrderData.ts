export async function deleteOrderData(orderId: number) {
  return (await request.post('/deleteOrderData', { orderId })).data
}
