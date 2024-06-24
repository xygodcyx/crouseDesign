export async function getShopGood4GoodIdData(goodId: number, userId: number) {
  return (await request.post('/getShopGood4GoodIdAndUserIdData', { goodId, userId })).data
}
