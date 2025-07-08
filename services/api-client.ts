import axios from "axios"

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
})