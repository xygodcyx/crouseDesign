import type { MockjsRequestOptions } from 'mockjs'
import { updateUser } from './userDataBase'

export function update(req: MockjsRequestOptions) {
  const { user } = JSON.parse(req.body)
  updateUser(user)
  return {
    code: 200,
    message: '更新成功',
  }
}
