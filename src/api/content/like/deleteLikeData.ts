export async function deleteLikeData(id?: number) {
  return (await request.post('/deleteLikeData', { like: id })).data
}
