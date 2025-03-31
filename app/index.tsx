import "./global.css";
import { Pressable, Text, TextInput, View } from "react-native";
import { style } from "../styles/index";
import { useState } from "react";
import {
  useFonts,
  Kanit_700Bold,
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_600SemiBold
} from "@expo-google-fonts/kanit";
import AppLoading from "expo-app-loading";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
    Kanit_600SemiBold,
    Kanit_500Medium,
  });
  const [isFocused, setIsFocused] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={style.container}>
      <View style={[style.formContainer]}>
        <Text style={[style.formHeader, { fontFamily: "Kanit_500Medium" }]}>
          Create an account
        </Text>

        <TextInput
          placeholder="Email"
          style={[style.input, isFocused && { outline: "none" }]}
          placeholderTextColor={"#BEBFC5"}
          onFocus={() => setIsFocused(true)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[style.input, isFocused && { outline: "none" }]}
          placeholderTextColor={"#BEBFC5"}
          onFocus={() => setIsFocused(true)}
        />
        <Pressable>
          <Text style={style.button}>Create an Account</Text>
        </Pressable>
      </View>
    </View>
  );
}
