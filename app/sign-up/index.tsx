import { Pressable, Text, TextInput, View } from "react-native";
import { style, thirdPartyStyles } from "@/styles/index";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { handleCreateUser } from "../domain/User";

export default function Index(): JSX.Element {
  const router = useRouter();

  const [isFocused, setIsFocused] = useState(false);

  // client data
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(
    function () {
      const timerId = setTimeout(() => setError(""), 3000);

      return () => clearTimeout(timerId);
    },
    [error]
  );

  return (
    <View style={style.container}>
      <View style={[style.formContainer]}>
        <Text style={[style.formHeader, { fontFamily: "Kanit_500Medium" }]}>
          Create an account
        </Text>

        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          placeholderTextColor={"#BEBFC5"}
          onFocus={() => setIsFocused(true)}
          style={[style.input, isFocused && { outline: "none" }]}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={"#BEBFC5"}
          onFocus={() => setIsFocused(true)}
          style={[style.input, isFocused && { outline: "none" }]}
        />

        {error && (
          <Text style={{ fontFamily: "Kanit_400Regular", color: "red" }}>
            {error}
          </Text>
        )}

        <Pressable
          onPress={() => handleCreateUser(email, password, router, setError)}>
          <Text style={style.button}>Create an Account</Text>
        </Pressable>
      </View>

      <View style={[style.formContainer, { paddingVertical: 0, gap: 2 }]}>
        <Pressable style={thirdPartyStyles.button}>
          <Text style={thirdPartyStyles.text}>Continue with Google</Text>
        </Pressable>
        <Pressable style={thirdPartyStyles.button}>
          <Text style={thirdPartyStyles.text}>Continue with Facebook</Text>
        </Pressable>
      </View>

      <View
        style={[
          style.formContainer,
          { paddingVertical: 0, borderRadius: 0, marginTop: 30 },
        ]}>
        <Text style={[thirdPartyStyles.text, { color: "#000" }]}>
          Already have an account?{" "}
          <Pressable onPress={() => router.push("./login")}>
            <Text style={{ color: "#A4DF1B" }}>Login</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
}
