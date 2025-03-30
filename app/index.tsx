import "./global.css";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {style} from "../styles/index";

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.formContainer}>
        <Text style={style.formHeader}>Create an account</Text>

        <TextInput placeholder="Email" style={style.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={style.input}
        />
        <Button title="Create Account" color="#0A851E" />
      </View>
    </View>
  );
}
