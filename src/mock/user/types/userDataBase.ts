import { Random } from 'mockjs'

declare interface IUserDataBase {
  id: number
  token: string
  account: string
  password: string
  name: string
  imgFace: string
  balance: number
  registerDate: number
  orderIds: Array<number>
  likeIds: Array<number>
  shopGoodIds: Array<number>
}

export class UserDataBase implements IUserDataBase {
  id: number
  token: string
  account: string
  password: string
  name: string
  imgFace: string
  balance: number = 0
  registerDate: number = new Date().getTime()
  orderIds: Array<number> = []
  likeIds: Array<number> = []
  shopGoodIds: Array<number> = []
  constructor(account: string, password: string, name?: string, imgFace?: string) {
    this.account = account
    this.password = password
    this.id = Random.integer(1)
    this.token = Random.string('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 128)
    this.name = name || 'xygod'
    this.imgFace = imgFace || '/imgs/face.jpg'
  }

  // 其他方法...
}
