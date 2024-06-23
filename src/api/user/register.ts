
export async function register(account: string, password: string, name?: string, imgFace?: string) {

  return await request.post('/register', {
    account,
    password,
    name,
    imgFace,
  })
}
