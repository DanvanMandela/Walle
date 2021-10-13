import { StyleSheet } from "react-native";

const style = StyleSheet.create(
  {
    navBar: {
      backgroundColor: "white",
      height: 54,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: 0,
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 1
    },
    leftContainer: {
      justifyContent: "flex-start",
      flexDirection: "row"
    },
    middleContainer: {
      flex: 2,
      backgroundColor: "white",
      flexDirection: "row",
      fontSize: 18,
      fontWeight:"bold",
      fontFamily:"arial",
      marginHorizontal:10,
      color: "#212121",

      marginLeft: 10,
      marginRight: 10,
    },
    rightContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    rightIcon: {
      paddingHorizontal: 20,
      resizeMode: "contain",
      backgroundColor: "white"
    }
  }
);

export default style;
