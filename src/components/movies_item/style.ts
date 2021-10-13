import { StyleSheet } from "react-native";


const style = StyleSheet.create(
  {
    root: {
      flexDirection: "row",
      marginVertical: 5
    },
    image: {
      flex: 2,
      height: 200,
      resizeMode: "contain"
    },
    title: {
      fontSize: 18,
      fontFamily: "Times",
      color: "#212121",
      fontWeight: "bold"
    },
    description: {
      fontSize: 15,
      fontFamily: "arial",
      color: "grey",
      fontWeight: "normal"
    },

    subtitle: {
      fontSize: 11,
      color: "grey",
      fontWeight: "bold"
    },

    subtitleContainer: {
      marginVertical:2,
      flexDirection: "row",
    },

    detailsContainer: {
      paddingHorizontal: 10,
      flex: 3
    },
    verticalLine: {
      height: "100%",
      width: 1,
      backgroundColor: "#909090",
      marginHorizontal:5
    }
  }
);

export default style;
