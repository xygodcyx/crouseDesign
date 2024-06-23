import { Random } from 'mockjs'
import { GoodDataBase } from './types'

let goodsDataBase: Array<GoodDataBase> = [
  new GoodDataBase(
    '好玩的',
    'fun',
    'GTAV',
    100,
    50,
    '/imgs/banner1.jpg',
  ),
]

export function getGoodsDataBase(id?: number) {
  goodsDataBase = JSON.parse(localStorage.getItem('goodDataBase') || '[]') || []
  const name = Random.name()
  addGood(new GoodDataBase(
    '好玩的',
    'fun',
    name,
    Random.integer(100, 200),
    Random.integer(50, 100),
    Random.image('600x400', Random.color(), name.substring(0, 5)),
  ))
  return id ? goodsDataBase.filter(good => good.id === id) : goodsDataBase
}
export function addGood(good: GoodDataBase) {
  goodsDataBase.push(good)
  localStorage.setItem('goodDataBase', JSON.stringify(goodsDataBase))
}
export function deleteGood(good: GoodDataBase) {
  const index = goodsDataBase.findIndex(u => u.id === good.id)
  if (index !== -1) {
    goodsDataBase.splice(index, 1)
    localStorage.setItem('goodDataBase', JSON.stringify(goodsDataBase))
  }
  else {
    warn(`no find good ${good.label} : ${good.id}`)
  }
}
