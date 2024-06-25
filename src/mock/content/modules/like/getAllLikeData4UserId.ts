import type { MockjsRequestOptions } from 'mockjs'
import { getAllLike4UserId } from './likeDataBase'

export function getAllLikeData4UserId(req: MockjsRequestOptions) {
  const { userId } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '获取收藏成功'
  const data = getAllLike4UserId(userId)
  return {
    code,
    data,
    msg,
  }
}
