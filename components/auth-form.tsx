import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, TextInput, View } from 'react-native';
import { AuthErrorMsg } from 'types/auth';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { loginUser, signUser } from 'services/auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToastManager, { Toast } from 'toastify-react-native';

const styles = {
  container: `items-center flex-1 justify-center gap-5 bg-primary`,
  inputContainer: `w-4/5 rounded-lg shadow-md mx-auto`,

  inputLabel: `text-xl text-white font-medium mb-2`,
  textInput: `w-full h-12 px-4 border border-gray-300 rounded-lg text-white text-xl placeholder:text-white/80`,

  button: `w-4/5 mx-auto bg-white p-4 rounded-full bg-primaryLight`,
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  async function handleSubmit() {
    if (!password) setError((errorMsg) => ({ ...errorMsg, passwordMsg: 'Password is required' }));
    if (!name) setError((errorMsg) => ({ ...errorMsg, userMsg: 'Username is required' }));

    if (authType === 'signup' && !mail)
      return setError((errorMsg) => ({ ...errorMsg, mailMsg: 'Email is required' }));

    if (authType === 'signup' && !emailRegex.test(mail)) {
      setError((errorMsg) => ({ ...errorMsg, mailMsg: 'Please provide a mail' }));
    }

    try {
      setIsLoading(true);

      if (password && name && authType === 'login') {
        const response = await loginUser(name, password);
        const token = response.data.userToken;
        // console.log('Login successful:', response.data.userToken);
        AsyncStorage.setItem('userToken', token);
        router.push('/(tabs)');
      }

      if (authType === 'signup' && password && name && mail) {
        console.log(authType, password, name, mail);
        const response = await signUser(name, password, mail);
        // const token = response.data.userToken;
        // // console.log('Signup successful:', response.data.userToken);
        // AsyncStorage.setItem('userToken', token);

        console.log('Signup successful:', response.data);
        // router.push('/(tabs)');
      }
    } catch (error) {
      Toast.error(error instanceof Error ? error.message : 'An error occurred', 'bottom');
    } finally {
      setIsLoading(false);
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
            autoCapitalize="none"
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
          autoCapitalize="none"
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
          autoCapitalize="none"
        />
        {error.passwordMsg && <Text className={styles.textError}>{error.passwordMsg}</Text>}
      </View>

      {displayPrompt && (
        <Link href="/forgot-password">
          <Text className={styles.text}>Forgot Password?</Text>
        </Link>
      )}

      <Pressable className={styles.button} onPress={handleSubmit}>
        {!isLoading && <Text className={styles.buttonText}>{buttonText}</Text>}
        {isLoading && <ActivityIndicator size="small" color="#0C3A13" />}
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

      <ToastManager />
    </View>
  );
}

export function AuthForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<AuthErrorMsg>({ userMsg: '', mailMsg: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (error.mailMsg || error.userMsg) {
      const timeout = setTimeout(() => setError({ userMsg: '', mailMsg: '' }), 5000);
      return () => clearTimeout(timeout);
    }
  }, [error.mailMsg, error.userMsg]);

  function handleVerify() {
    if (!name && !email)
      setError({ userMsg: 'Username is required', mailMsg: 'Email is required' });
    if (!emailRegex.test(email))
      setError((errorMsg) => ({ ...errorMsg, mailMsg: 'Please provide a valid email' }));
    if (!email) setError((errorMsg) => ({ ...errorMsg, mailMsg: 'Email is required' }));
    if (!name) setError((errorMsg) => ({ ...errorMsg, userMsg: 'Username is required' }));

    if (email && name && emailRegex.test(email)) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        console.log('User verification initiated');
      }, 2000);

      router.push('update-password');
    }
  }

  return (
    <View className={styles.container}>
      <Pressable className={styles.arrowButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={20} onPress={() => router.back()} />
      </Pressable>

      <Ionicons name="aperture-outline" size={64} color="white" className="mx-auto" />

      <View className={styles.inputContainer}>
        <Text className={styles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="email"
          className={styles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {error.mailMsg && <Text className={styles.textError}>{error.mailMsg}</Text>}
      </View>

      <View className={styles.inputContainer}>
        <Text className={styles.inputLabel}>Username</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="username"
          className={styles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {error.userMsg && <Text className={styles.textError}>{error.userMsg}</Text>}
      </View>

      <Pressable className={styles.button} onPress={handleVerify} disabled={isLoading}>
        {!isLoading && <Text className={styles.buttonText}>User verification</Text>}
        {isLoading && <ActivityIndicator size="small" color="#0C3A13" />}
      </Pressable>
    </View>
  );
}

export function AuthUpdatePassword() {
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<AuthErrorMsg>({ passwordMsg: '', confirmPasswordMsg: '' });

  useEffect(() => {
    if (error.passwordMsg || error.confirmPasswordMsg) {
      const timeout = setTimeout(() => setError({ passwordMsg: '', confirmPasswordMsg: '' }), 5000);
      return () => clearTimeout(timeout);
    }
  }, [error.passwordMsg, error.confirmPasswordMsg]);

  function handleUpdatePassword() {
    if (!password) {
      setError((errorMsg) => ({ ...errorMsg, passwordMsg: 'Password is required' }));
    } else if (password !== confirmPassword) {
      setError((errorMsg) => ({ ...errorMsg, confirmPasswordMsg: 'Passwords do not match' }));
    } else {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        console.log('User verification initiated');
      }, 2000);

      setPassword('');
      setConfirmPassword('');
      router.push('/');
    }
  }

  return (
    <View className={styles.container}>
      <Pressable className={styles.arrowButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={20} onPress={() => router.back()} />
      </Pressable>

      <Ionicons name="aperture-outline" size={64} color="white" className="mx-auto" />

      <View className={styles.inputContainer}>
        <Text className={styles.inputLabel}>New Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="new password"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          className={styles.textInput}
        />
        {error.passwordMsg && <Text className={styles.textError}>{error.passwordMsg}</Text>}
      </View>

      <View className={styles.inputContainer}>
        <Text className={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="confirm password"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          className={styles.textInput}
        />
        {error.confirmPasswordMsg && (
          <Text className={styles.textError}>{error.confirmPasswordMsg}</Text>
        )}
      </View>

      <Pressable onPress={handleUpdatePassword} className={styles.button}>
        {!isLoading && <Text className={styles.buttonText}>Update Password</Text>}
        {isLoading && <ActivityIndicator size="small" color="#0C3A13" />}
      </Pressable>
    </View>
  );
}
