export async function getGoodsData(id?: number) {
  return (await request.post('/getGoodsData', { id })).data
}
