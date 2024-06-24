import { Random } from 'mockjs'
import type { ShopGoodDataBase } from './ShopGoodsData'
import type { GoodDataBase } from './GoodsData'

export declare interface Order {
  id: number
  sum: number
  userId: number
  shopGoods: Array<ShopGoodDataBase>
}

export class OrderDataBase implements Order {
  id: number
  userId: number
  shopGoods: Array<ShopGoodDataBase>
  sum: number

  constructor(userId: number, shopGoods?: Array<ShopGoodDataBase>, quantity?: number, sum?: number) {
    this.id = Random.integer(10)
    this.userId = userId
    this.shopGoods = shopGoods || []
    this.sum = sum || this.shopGoods.reduce((acc, cur) => acc + cur.sum, 0)
  }
}
