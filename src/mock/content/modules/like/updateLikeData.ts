import type { MockjsRequestOptions } from 'mockjs'
import { updateLike } from './likeDataBase'

export function updateLikeData(req: MockjsRequestOptions) {
  const { likeData } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '更新收藏成功'
  const data = updateLike(likeData)
  return {
    code,
    data,
    msg,
  }
}
