import { StyleSheet } from "react-native";


const style = StyleSheet.create(
    {
        root: {
            flexDirection: "row",
            marginVertical: 5
        },
        image: {
            flex: 1,
            height: 50,
            width: 100,
            resizeMode: "center"
        },
        title: {
            fontSize: 18,
            fontFamily: "Times",
            color: "#212121",
            fontWeight: "bold"
        },
        detailsContainer: {
            paddingHorizontal: 10,
            flex: 3
        },
    }
);

export default style;
