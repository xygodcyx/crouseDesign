import type { GoodDataBase } from '~/mock/content'

export async function updateGoodsData(good?: GoodDataBase) {
  return (await request.post('/updateGoodsData', { good })).data
}
