import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "80%",
    height: "50%",
    padding: 20,
    paddingTop: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    flexDirection: "column",
    gap: 10,
  },
  formHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#0a851e",
    borderRadius: 8,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    padding: 10,
  }
});