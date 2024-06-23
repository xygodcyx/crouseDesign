import type { MockjsRequestOptions } from 'mockjs'
import { isBoolean } from 'element-plus/es/utils/types.mjs'
// import { getUserData } from './getUserData'
import { canLogin } from './userDataBase'

export function login(req: MockjsRequestOptions) {
  const { account, password } = JSON.parse(req.body)
  const isCanLogin = canLogin(account, password)
  if (isBoolean(isCanLogin) && !isCanLogin) {
    return {
      code: -1,
      message: '登录失败,账号或密码错误',
    }
  }
  const users = isBoolean(isCanLogin) ? [] : isCanLogin
  return {
    code: 200,
    message: '登录成功',
    userInfo: { ...users },
  }
}
