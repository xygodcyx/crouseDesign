export async function getAllLikeData4UserId(userId: number) {
  return (await request.post('/getAllLikeData4UserId', { userId })).data
}
