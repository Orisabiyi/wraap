import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,

    width: '95%',
    padding: 20,
  },
  otpContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 8,

    marginTop: 20
  },
  textInput: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: '20%',
    height: 80,
    borderRadius: 10
  },
  textHeading: {
    fontFamily: "Kanit_400Regular",
    textAlign: 'center',
    fontSize: 24
  },
  textBody: {
    fontFamily: 'Kanit_300Light',
    textAlign: 'center',
    fontSize: 16
  },
  button: {
    fontFamily: "Kanit_500Medium",
    backgroundColor: "#A4DF1B",
    alignSelf: 'stretch',
    textAlign: "center",
    borderRadius: 10,
    fontWeight: "600",
    color: "#010B13",
    width: '100%',
    fontSize: 18,
    padding: 15,
  },
  resendText: {
    fontFamily: "Kanit_400Regular",
    marginTop: 'auto'
  }
})