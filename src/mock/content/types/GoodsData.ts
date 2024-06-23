import { Random } from 'mockjs'

export declare interface Good {
  id: number
  classify: string
  classifyValue: string
  label: string
  oldPrice: number
  newPrice: number
  pic: string
}

export class GoodDataBase implements Good {
  id: number
  classify: string
  classifyValue: string
  label: string
  oldPrice: number
  newPrice: number
  pic: string
  constructor(classify: string, classifyValue: string, label: string, oldPrice: number, newPrice: number, pic: string) {
    this.id = Random.integer(10)
    this.classify = classify
    this.classifyValue = classifyValue
    this.label = label
    this.oldPrice = oldPrice
    this.newPrice = newPrice
    this.pic = pic
  }
}
