import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efeef4",
  },
  formContainer: {
    width: "95%",
    padding: 20,
    paddingTop: 30,
    borderRadius: 10,
    shadowColor: "#000",
    flexDirection: "column",
    gap: 10,
  },
  formHeader: {
    fontSize: 28,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    paddingInline: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#BEBFC5",
    fontSize: 14,
    fontFamily: "Kanit_400Regular"
  },
  button: {
    backgroundColor: "#A4DF1B",
    borderRadius: 10,
    textAlign: "center",
    color: "#010B13",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    padding: 15,
    fontFamily: "Kanit_500Medium",
  }
});

export const thirdPartyStyles = StyleSheet.create({
  button: {
    backgroundColor: "#100C08",
    borderRadius: 10,
    textAlign: "center",
    color: "#010B13",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    padding: 15,
    fontFamily: "Kanit_500Medium",
  },
  text: {
    fontFamily: "Kanit_400Regular",
    textAlign: "center",
    fontSize: 16,
    color: "#fff"
  }
})