import { instance } from "./api-client";

export async function loginUser(username: string, password: string) {
  try {
    const res = await instance.post('/login', {
      username,
      password
    })

    return res
  } catch (error) {
    throw new Error(`Login failed: ${error instanceof Error ? error.message : ''}`);
  }
}