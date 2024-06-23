export async function getAllGoodsData4UserId(id?: number) {
  return (await request.post('/getAllGoodsData4UserId', { id })).data
}
