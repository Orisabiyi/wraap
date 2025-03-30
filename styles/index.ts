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
    height: "50%",
    padding: 20,
    paddingTop: 30,
    borderRadius: 10,
    shadowColor: "#000",
    flexDirection: "column",
    gap: 10,
  },
  formHeader: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    padding: 10,
    paddingInline: 15,
    borderWidth: 1,
    borderColor: "#000",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#A4DF1B",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    padding: 15,
  }
});