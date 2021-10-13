import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {Movies, MovieDetails} from "../fragments";

const AppNavigator = createStackNavigator({
    Movies: {
        screen: Movies
    },
    MovieDetails: {
        screen: MovieDetails,
        navigationOptions: () => ({
            headerLeft: null
        })
    }
});

export default createAppContainer(AppNavigator);
