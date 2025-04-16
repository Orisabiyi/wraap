import { homeStyle } from "@/styles/homescreen";
import { Button, Pressable, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import HomescreenIcon from "../assets/images/homescreen-icon.png";

export default function Index(): JSX.Element {
  return (
    <SafeAreaProvider style={homeStyle.container}>
      <StatusBar style="light" />

      <LinearGradient
        colors={["#6BF057", "#0C3A13"]}
        style={[homeStyle.container, homeStyle.gradientContainer]}>
        <Text style={homeStyle.topText}>Skip</Text>
        <Text style={homeStyle.header}>Capture Your Moments</Text>

        <View style={homeStyle.imgContainer}>
          <Image
            source={HomescreenIcon}
            contentFit="cover"
            transition={1000}
            style={homeStyle.img}
          />
        </View>

        <Pressable style={{ width: "80%" }}>
          <Text style={homeStyle.button}>Get Started</Text>
        </Pressable>
      </LinearGradient>
    </SafeAreaProvider>
  );
}
