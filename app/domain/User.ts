import type { Router } from "expo-router"

export function handleCreateUser(email: string, password: string, router: Router, setError: React.Dispatch<React.SetStateAction<string>>) {
  if (!email || !password) return setError("Email Or Password is empty");

  router.push("/otp");
  return setError('')
}

export function handleResendOtp() {
  console.log('Resend OTP')
}

export function handleVerifyOtp(router: Router) {
  router.push('./app')
  console.log('verify otp')
}