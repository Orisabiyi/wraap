import { style } from "@/styles/otp";
import {
  Kanit_300Light,
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_600SemiBold,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Pressable, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { handleResendOtp, handleVerifyOtp } from "../domain/User";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Index(): JSX.Element {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [fontsLoaded] = useFonts({
    Kanit_300Light,
    Kanit_400Regular,
    Kanit_700Bold,
    Kanit_600SemiBold,
    Kanit_500Medium,
  });

  useEffect(
    function () {
      const timerId = setTimeout(() => setError(""), 3000);

      return () => clearTimeout(timerId);
    },
    [error]
  );

  return (
    <View style={style.container}>
      <View
        style={{
          width: "100%",
          flexBasis: "35%",
          backgroundColor: "limegreen",
          alignSelf: "center",
        }}></View>

      <View style={[style.otpContainer]}>
        <Text style={[style.textHeading]}>OTP Verification</Text>
        <Text style={[style.textBody, { fontWeight: 800, fontSize: 18 }]}>
          Hello Orisabiyi,
        </Text>
        <Text style={[style.textBody]}>
          An email as been sent to your mail containing your OTP
        </Text>

        <OtpInput
          type="numeric"
          numberOfDigits={4}
          placeholder="****"
          onFilled={(code) => setOtp(code)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          theme={{
            containerStyle: style.inputContainer,
            pinCodeContainerStyle: style.textInput,
            filledPinCodeContainerStyle: { borderColor: "#A4DF1B" },
          }}
        />

        {error && (
          <Text style={{ fontFamily: "Kanit_400Regular", color: "red" }}>
            {error}
          </Text>
        )}

        <Text style={style.resendText}>
          OTP not received?{" "}
          <span style={{ color: "#A4DF1B" }} onClick={handleResendOtp}>
            RESEND
          </span>
        </Text>

        <Pressable
          style={{ width: "100%", marginTop: 20 }}
          onPress={() => handleVerifyOtp(otp, setError, router)}>
          <Text style={style.button}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
