import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { LoginErrorMsg } from 'types/auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

export function Login() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<LoginErrorMsg>({ userMsg: '', passwordMsg: '' });

  useEffect(() => {
    setTimeout(() => setError({ userMsg: '', passwordMsg: '' }), 10000);
  }, [error]);

  function handleSubmit() {
    if (!password) setError((errorMsg) => ({ ...errorMsg, passwordMsg: 'Password is required' }));
    if (!name) setError((errorMsg) => ({ ...errorMsg, userMsg: 'Username is required' }));
  }

  return (
    <View className={styles.container}>
      <Ionicons name="aperture-outline" size={64} color="white" className="mx-auto" />

      <View className={styles.inputContainer}>
        <Text className={styles.inputLabel}>Username</Text>
        <TextInput
          value={name}
          placeholder="Username"
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

      <Text className={styles.text}>
        Don&apos;t have an account? <Link href="/create-account">Sign Up</Link>
      </Text>

      <Pressable className={styles.button} onPress={handleSubmit}>
        <Text className={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
}
const styles = {
  container: `items-stretch flex-1 justify-center gap-5 bg-[#0C3A13]`,
  inputContainer: `w-4/5 rounded-lg shadow-md mx-auto`,
  inputLabel: `text-2xl text-white font-medium mb-2`,
  textInput: `w-full h-12 px-4 border border-gray-300 rounded-lg text-white text-xl placeholder:text-white`,
  button: `w-4/5 mx-auto bg-white p-5 rounded-xl bg-[#51BA34]`,
  buttonText: `mx-auto font-semibold text-2xl`,
  text: `text-white text-xl w-4/5 mx-auto mb-5`,
  textError: `text-red-500 text-lg mt-2`,
};
