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
    textAlign: 'center',
    fontSize: 40,
    width: '60%',
    color: '#fff'
  },
  imgContainer: {
    height: 240,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    flex: 1,
    width: '100%'
  },
  button: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#605E5E',
    backgroundColor: '#C6E431',
    paddingVertical: 10,
    borderRadius: 100,
    fontSize: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  }
})
