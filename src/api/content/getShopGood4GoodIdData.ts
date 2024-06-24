export async function getShopGood4GoodIdData(goodId?: number) {
  return (await request.post('/getShopGood4GoodIdData', { goodId })).data
}
