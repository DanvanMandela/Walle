/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
    SafeAreaView,
    StatusBar,
    useColorScheme

} from "react-native";

import {Provider} from "react-redux";
import {store} from "./src/redux";
import { NavigationContainer } from '@react-navigation/native';


import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import {Movies, Splash, MovieDetails} from "./src/fragments";
import {CustomToolbar} from "./src/components/toolbar/custom_toolbar";
import {AppNavigator, NavigationService} from "./src/navigation";


const App = () => {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                backgroundColor={isDarkMode ? "#212121" : "white"}
                barStyle={isDarkMode ? "light-content" : "dark-content"}/>
            <CustomToolbar/>


            <Provider store={store}>
                <AppNavigator
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>

        </SafeAreaView>
    );
};


export default App;
