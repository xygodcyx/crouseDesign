import type { MockjsRequestOptions } from 'mockjs'
import { addLike } from './likeDataBase'

export function addLikeData(req: MockjsRequestOptions) {
  const { likeData } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '添加收藏成功'
  const data = addLike(likeData)
  return {
    code,
    data,
    msg,
  }
}
