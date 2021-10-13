import {Dimensions, StyleSheet} from "react-native";

const dimensions = Dimensions.get("window");
const imageHeight = Math.round(dimensions.width * 16 / 16);
const imageWidth = dimensions.width;
const style = StyleSheet.create(
    {
        root: {
            flexDirection: "column",
            borderColor: "#d1d1d1",
            marginBottom: 25
        },

        absolute: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },


        imageBackground: {
            height: imageHeight,
            width: imageWidth,
            resizeMode: "cover",
            flex: 1,
        },
        title: {
            color: "#212121",
            paddingHorizontal: 10,
            marginTop: 10,
            fontSize: 27,
            fontWeight: "bold",
            fontFamily: 'arial'
        },

        detailsContainer: {
            padding: 10,
            flex: 3
        },

        scrollContainer: {
            flex: 1
        },
        image: {
            resizeMode: 'center',
            height: imageHeight,
            width: imageWidth,
        },
        headerContainer: {
            flexDirection: undefined
        },
        subtitleContainer: {
            paddingHorizontal: 10,
            marginVertical: 2,
            flexDirection: "row",
        },
        subtitle: {
            fontSize: 14,
            color: "grey",
            fontWeight: "bold"
        },
        verticalLine: {
            height: "100%",
            width: 1,
            backgroundColor: "#909090",
            marginHorizontal: 5
        },
        description: {
            padding: 10,
            fontSize: 17,
            fontFamily: "arial",
            color: "#212121",
            fontWeight: "normal"
        },
    }
);

export default style;
