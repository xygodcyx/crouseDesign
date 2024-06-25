import { Random } from 'mockjs'
import { GoodDataBase } from './GoodsData'

export declare interface ShopGood {
  id: number
  quantity: number
  sum: number
  userId: number
  good: GoodDataBase
  addDate: number
}

export class ShopGoodDataBase implements ShopGood {
  id: number
  userId: number
  good: GoodDataBase
  quantity: number
  sum: number
  addDate: number

  constructor(userId: number, good?: GoodDataBase, quantity?: number, sum?: number) {
    this.id = Random.integer(10)
    this.userId = userId
    this.good = good || new GoodDataBase()
    this.quantity = quantity || 0
    this.sum = sum || this.good.newPrice
    this.addDate = new Date().getTime()
  }
}
