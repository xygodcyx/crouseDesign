import type { LikeDataBase } from '~/mock/content/types'

export async function addLikeData(likeData?: LikeDataBase) {
  return (await request.post('/addLikeData', { likeData })).data
}
