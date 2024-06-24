export async function getShopGoodData4GoodIdAndUserId(goodId: number, userId: number) {
  return (await request.post('/getShopGoodData4GoodIdAndUserId', { goodId, userId })).data
}
