import type { Router } from "expo-router"

export function handleResendOtp() {
  console.log('Resend OTP')
}

export function handleVerifyOtp(router: Router) {
  router.push('./app')
  console.log('verify otp')
}