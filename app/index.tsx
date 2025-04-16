import { homeStyle } from "@/styles/homescreen";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function Index(): JSX.Element {
  return (
    <SafeAreaProvider style={homeStyle.container}>
      <StatusBar style="light" />

      <LinearGradient
        colors={["#6BF057", "#0C3A13"]}
        style={[homeStyle.container, homeStyle.gradientContainer]}>
        <Text style={homeStyle.topText}>Skip</Text>
        <Text style={homeStyle.header}>Capture Your Moments</Text>
      </LinearGradient>
    </SafeAreaProvider>
  );
}
