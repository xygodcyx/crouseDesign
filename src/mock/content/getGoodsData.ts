import { getGoodsDataBase } from './goodsDataBase'

export function getGoodsData() {
  const code = 200
  const msg = '获取成功'
  const data = getGoodsDataBase()
  return {
    code,
    data,
    msg,
  }
}
