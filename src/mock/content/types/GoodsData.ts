import { Random } from 'mockjs'

export declare interface Good {
  id: number
  classify: string
  classifyValue: string
  label: string
  oldPrice: number
  newPrice: number
  pic: string
  sales: number
  views: number

}

export class GoodDataBase implements Good {
  id: number
  classify: string
  classifyValue: string
  label: string
  oldPrice: number
  newPrice: number
  pic: string
  sales: number
  views: number
  constructor(classify?: string, classifyValue?: string, label?: string, oldPrice?: number, newPrice?: number, pic?: string, sales?: number, views?: number) {
    this.id = Random.integer(10)
    this.classify = classify || '好玩的'
    this.classifyValue = classifyValue || 'fun'
    const name = Random.name()
    this.label = label || name
    this.oldPrice = oldPrice || Random.integer(100, 150)
    this.newPrice = newPrice || Random.integer(50, 100)
    this.pic = pic || Random.image('600x400', Random.color(), name.substring(0, 5))
    this.sales = sales || 0
    this.views = views || 0
  }
}
