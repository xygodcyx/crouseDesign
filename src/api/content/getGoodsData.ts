export async function getGoodsData() {
  return (await request('/getGoodsData')).data
}
