export async function getAllGoodsData4UserId(userId?: number) {
  return (await request.post('/getAllGoodsData4UserId', { userId })).data
}
