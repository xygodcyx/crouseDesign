export async function getShopGoodsData(userId?: number) {
  return (await request.post('/getShopGoodsData', { userId })).data
}
