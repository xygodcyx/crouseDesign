export async function deleteShopGoodsData(id?: number) {
  return (await request.post('/deleteShopGoodsData', { id })).data
}
