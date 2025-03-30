import "./global.css";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { style } from "../styles/index";
import { useState } from "react";

export default function Index() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={style.container}>
      <View style={style.formContainer}>
        <Text style={style.formHeader}>Create an account</Text>

        <TextInput
          placeholder="Email"
          style={[style.input, isFocused && { outline: "none" }]}
          onFocus={() => setIsFocused(true)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[style.input, isFocused && { outline: "none" }]}
          onFocus={() => setIsFocused(true)}
        />
        <Pressable>
          <Text style={style.button}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
}
