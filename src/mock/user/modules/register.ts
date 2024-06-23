import type { MockjsRequestOptions } from 'mockjs'
import { UserDataBase } from '../types'
import { addUser, canRegister } from './userDataBase'

export function register(req: MockjsRequestOptions) {
  // log(req.body)
  const { account, password, name, imgFace } = JSON.parse(req.body)
  const isCanRegister = canRegister(account)
  if (!isCanRegister) {
    return {
      code: -1,
      message: '注册失败,用户名已注册',
    }
  }
  // addUser()
  const user = new UserDataBase(account, password, name, imgFace)
  addUser(user)
  return {
    code: 200,
    message: '注册成功',
  }
}
