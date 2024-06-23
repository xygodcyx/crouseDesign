import { Random } from 'mockjs'
import { GoodDataBase } from './GoodsData'
import type { Good } from './GoodsData'

export declare interface ShopGood {
  id: number
  quantity: number
  sum: number
  userId: number
  good: Good
}

export class ShopGoodDataBase implements ShopGood {
  id: number
  userId: number
  good: Good
  quantity: number
  sum: number
  constructor(userId: number, good?: Good, quantity?: number, sum?: number) {
    this.id = Random.integer(10)
    this.userId = userId
    this.good = good || new GoodDataBase()
    this.quantity = quantity || 1
    this.sum = sum || this.good.newPrice
  }
}
