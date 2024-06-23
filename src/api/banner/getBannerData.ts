export async function getBannerData() {
  return (await request.get('/getBannerData')).data
}
