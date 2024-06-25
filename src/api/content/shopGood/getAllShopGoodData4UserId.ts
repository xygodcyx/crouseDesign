export async function getAllShopGoodData4UserId(userId?: number) {
  return (await request.post('/getAllShopGoodData4UserId', { userId })).data
}
