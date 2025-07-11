import { instance } from "./api-client";

export async function loginUser(username: string, password: string) {
  try {
    const res = await instance.post('/login', {
      username,
      password
    })

    return res
  } catch (error) {
    throw new Error(`Login failed: ${error as any ? (error as any).response.data.message : ''}`);
  }
}


export async function signUser(username: string, password: string, email: string) {
  try {
    const res = await instance.post('/sign-up', {
      username,
      password,
      email
    })

    return res
  } catch (error) {
    throw new Error(`${error as any ? JSON.stringify((error as any).response.data.message) : ''}`);
  }
}

