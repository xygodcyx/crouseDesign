import type { MockjsRequestOptions } from 'mockjs'
import { deleteLike } from './likeDataBase'

export function deleteLikeData(req: MockjsRequestOptions) {
  const { id } = JSON.parse(req.body)
  // const id = 0

  const code = 200
  const msg = '删除收藏成功'
  const data = deleteLike(id)
  return {
    code,
    data,
    msg,
  }
}
