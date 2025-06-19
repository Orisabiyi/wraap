import { AuthForm } from 'components/auth-form';

export default function CreateAccount() {
  return (
    <>
      <AuthForm buttonText="Sign up" back={true} displayPrompt={false} authType="signup" />
    </>
  );
}
