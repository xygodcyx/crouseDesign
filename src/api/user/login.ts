export async function login(account: string, password: string) {
  return await request.post('/login', {
    account,
    password,
  })
}
