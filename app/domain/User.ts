import type { Router } from "expo-router"

export function handleCreateUser(email: string, password: string, router: Router, setError: React.Dispatch<React.SetStateAction<string>>): void {
  if (!email || !password) return setError("Email Or Password is empty");

  router.push("/otp");
  return setError('')
}

export function handleResendOtp(): void {
  console.log('Resend OTP')
}

export function handleVerifyOtp(code: string, setError: React.Dispatch<React.SetStateAction<string>>, router: Router): void {
  if (code.length < 1) return setError('OTP should be provided')
  if (code.length !== 4) return setError('OTP is not correct')

  setError('')
  return router.push('./app')
}