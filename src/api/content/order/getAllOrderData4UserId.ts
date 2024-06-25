export async function getAllOrderData4UserId(userId: number) {
  return (await request.post('/getAllOrderData4UserId', { userId })).data
}
