import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container: {
        margin:10,
        justifyContent: 'flex-end'
    },
    ImageBg: {
        flex: 1,
        height: 100,
        width: 100,
        opacity: 0.3

    },
    carouselContainer: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carousel: {
        flex: 1,
        overflow: 'visible'
    },
    playIconContainer: {
        position: 'absolute',
        top: -10,
        right: 2,
        backgroundColor: '#02ad94',
        padding: 10,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderWidth: 4,
        borderColor: 'rgba(0, 255, 217, 0.4)'

    }
});

export default style;
