import { AuthForm } from 'components/auth-form';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <>
      <AuthForm buttonText="Sign in" authType="login" />
      <StatusBar style="auto" />
    </>
  );
}
