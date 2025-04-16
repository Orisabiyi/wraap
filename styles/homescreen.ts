import { Platform, StatusBar, StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  gradientContainer: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    fontFamily: "Kanit_400Regular",

    display: 'flex',
    alignItems: 'center',
    gap: 60,
  },
  topText: {
    alignSelf: 'flex-end',
    fontFamily: 'inherit',
    fontSize: 16,
    color: '#fff',
  },
  header: {
    fontFamily: 'irish-grover',
    // fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    width: '60%',
    color: '#fff'
  }
})
