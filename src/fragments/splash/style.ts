import { StyleSheet } from "react-native";

const style = StyleSheet.create(
  {
    root: {
      flexDirection: "row",
      borderColor: "#d1d1d1",
      marginVertical: 5
    },
    image: {
      flex: 2,
      height: 150,
      resizeMode: "contain"
    },
    title: {
      fontSize: 18
    },
    newPrice: {
      fontSize: 18,
      fontWeight: "bold",
      margin: 1
    },
    price: {
      fontSize: 15,
      fontWeight: "normal",
      color: "#828282"
    },
    oldPrice: {
      fontSize: 12,
      fontWeight: "normal",
      marginLeft: 5,
      textDecorationLine: "line-through"
    },
    detailsContainer: {
      padding: 10,
      flex: 3
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 5
    },
    ratingStar: {
      margin: 2
    },
    scrollContainer: {
      flex: 1
    }
  }
);

export default style;
