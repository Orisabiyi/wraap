import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { AuthErrorMsg } from 'types/auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';

const styles = {
  container: `items-center flex-1 justify-center gap-5 bg-[#0C3A13]`,
  inputContainer: `w-4/5 rounded-lg shadow-md mx-auto`,

  inputLabel: `text-xl text-white font-medium mb-2`,
  textInput: `w-full h-12 px-4 border border-gray-300 rounded-lg text-white text-xl placeholder:text-white/80`,

  button: `w-4/5 mx-auto bg-white p-4 rounded-full bg-[#51BA34]`,
  arrowButton: `absolute top-20 left-10 bg-white p-1 rounded-full`,
  socialButton: `flex flex-row items-center justify-center gap-3 bg-green-800 w-4/5 p-4 rounded-full`,

  textError: `text-red-500 text-lg mt-2`,
  buttonText: `mx-auto font-semibold text-xl`,
  text: `text-white text-lg w-4/5 mx-auto mb-10`,
  socialText: `text-xl text-white font-semibold`,
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function AuthForm({
  buttonText,
  displayPrompt = true,
  back,
  authType,
}: {
  buttonText: string;
  displayPrompt?: boolean;
  back?: boolean;
  authType: 'login' | 'signup';
}) {
  const [error, setError] = useState<AuthErrorMsg>({ userMsg: '', passwordMsg: '', mailMsg: '' });
  const [password, setPassword] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (error.userMsg || error.passwordMsg) {
      const timeout = setTimeout(() => setError({ userMsg: '', passwordMsg: '' }), 5000);

      return () => clearTimeout(timeout);
    }
  }, [error.userMsg, error.passwordMsg]);

  function handleSubmit() {
    if (!password) setError((errorMsg) => ({ ...errorMsg, passwordMsg: 'Password is required' }));
    if (!name) setError((errorMsg) => ({ ...errorMsg, userMsg: 'Username is required' }));

    if (authType === 'signup' && !mail)
      return setError((errorMsg) => ({ ...errorMsg, mailMsg: 'Email is required' }));

    if (authType === 'signup' && !emailRegex.test(mail)) {
      setError((errorMsg) => ({ ...errorMsg, mailMsg: 'Please provide a mail' }));
    }
  }

  return (
    <View className={styles.container}>
      {back && (
        <Pressable className={styles.arrowButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} onPress={() => router.back()} />
        </Pressable>
      )}

      <Ionicons name="aperture-outline" size={64} color="white" className="mx-auto" />

      {authType === 'signup' && (
        <View className={styles.inputContainer}>
          <Text className={styles.inputLabel}>Email</Text>
          <TextInput
            value={mail}
            placeholder="example@gmail.com"
            onChangeText={setMail}
            className={styles.textInput}
          />
          {error.mailMsg && <Text className={styles.textError}>{error.mailMsg}</Text>}
        </View>
      )}
      <View className={styles.inputContainer}>
        <Text className={styles.inputLabel}>Username</Text>
        <TextInput
          value={name}
          placeholder="johndoe"
          onChangeText={setName}
          className={styles.textInput}
        />
        {error.userMsg && <Text className={styles.textError}>{error.userMsg}</Text>}
      </View>
      <View className={styles.inputContainer}>
        <Text className={styles.inputLabel}>Password</Text>
        <TextInput
          value={password}
          placeholder="Password"
          className={styles.textInput}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        {error.passwordMsg && <Text className={styles.textError}>{error.passwordMsg}</Text>}
      </View>

      {displayPrompt && (
        <Link href="/forgot-password">
          <Text className={styles.text}>Forgot Password?</Text>
        </Link>
      )}

      <Pressable className={styles.button} onPress={handleSubmit}>
        <Text className={styles.buttonText}>{buttonText}</Text>
      </Pressable>

      <Pressable className={styles.socialButton} onPress={() => console.log('Google Sign In')}>
        <Ionicons name="logo-google" color="white" size={24} />
        <Text className={styles.socialText}>
          {displayPrompt ? 'Continue' : 'Sign up'} with Google
        </Text>
      </Pressable>

      <Pressable className={styles.socialButton} onPress={() => console.log('Google Sign In')}>
        <Ionicons name="logo-twitter" color="white" size={24} />
        <Text className={styles.socialText}>
          {displayPrompt ? 'Continue' : 'Sign up'} with Twitter
        </Text>
      </Pressable>

      {displayPrompt && (
        <Text className={styles.text}>
          Don&apos;t have an account? <Link href="/create-account">Sign Up</Link>
        </Text>
      )}
    </View>
  );
}

export function AuthForgotPassword() {
  const router = useRouter();

  return (
    <View className={styles.container}>
      <Pressable className={styles.arrowButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={20} onPress={() => router.back()} />
      </Pressable>

      <Ionicons name="aperture-outline" size={64} color="white" className="mx-auto" />

      <View className={styles.inputContainer}>
        <Text className={styles.inputLabel}>Email</Text>
        <TextInput placeholder="email" className={styles.textInput} autoCorrect={false} />
      </View>

      <Pressable className={styles.button} onPress={() => console.log('Reset Password')}>
        <Text className={styles.buttonText}>User verification</Text>
      </Pressable>
    </View>
  );
}
