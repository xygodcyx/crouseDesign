export async function getOrderData4Id(id: number) {
  return (await request.post('/getOrderData4Id', { id })).data
}
