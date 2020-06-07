import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      "rgba(65, 0, 0)",
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  logo: {
    width: '65%',
    height: '35%',
    resizeMode: 'stretch',
    marginBottom: '2%'
  },

    player: {
        height: '100%',
        width: '100%',
        
    },
    body: {
        flex: 1,
        width: '50%',
        height: '70%',
        backgroundColor: '#01030d',
        marginTop: 150,
        marginLeft: -500,
           
    }
});
