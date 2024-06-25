import { Random } from 'mockjs'
import type { ShopGoodDataBase } from './ShopGoodsData'
import type { GoodDataBase } from './GoodsData'

export enum ENUM_ORDER_STATUS {
  UNPAID = '待支付',
  HAVE_PAID = '已支付',
  CANCELED = '已取消',
}
export declare interface Order {
  id: number
  sum: number
  userId: number
  shopGoods: Array<ShopGoodDataBase>
  addDate: number
  status: ENUM_ORDER_STATUS
}

export class OrderDataBase implements Order {
  id: number
  sum: number
  userId: number
  shopGoods: Array<ShopGoodDataBase>
  addDate: number
  status: ENUM_ORDER_STATUS

  constructor(userId: number, shopGoods?: Array<ShopGoodDataBase>, sum?: number, addDate?: number, status?: ENUM_ORDER_STATUS) {
    this.id = Random.integer(10)
    this.userId = userId
    this.shopGoods = shopGoods || []
    this.sum = sum || this.shopGoods.reduce((acc, cur) => acc + cur.sum, 0)
    this.addDate = addDate || new Date().getTime()
    this.status = status || ENUM_ORDER_STATUS.UNPAID
  }
}
