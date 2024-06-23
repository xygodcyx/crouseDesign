import type { UserDataBase } from '~/mock/user/types'

export async function updateUser(user: UserDataBase) {
  return await request.post('/updateUser', {
    user,
  })
}
