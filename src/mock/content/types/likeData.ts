import { Random } from 'mockjs'
import { GoodDataBase } from './GoodsData'

export declare interface Like {
  id: number
  userId: number
  addDate: number
  good: GoodDataBase
}

export class LikeDataBase implements Like {
  id: number
  userId: number
  addDate: number
  good: GoodDataBase

  constructor(userId: number, good?: GoodDataBase) {
    this.id = Random.integer(10)
    this.userId = userId
    this.good = good || new GoodDataBase()
    this.addDate = new Date().getTime()
  }
}
