import React from "react";
import {View, Text, Image} from "react-native";
import style from "./style";

import {MovieCompanies} from "../../redux";


interface Owners {
    item: MovieCompanies
}

export const MovieOwners = (props: Owners) => {
    const {item} = props;
    return <View style={style.root}>
        <Image source={{uri: "https://image.tmdb.org/t/p/original/" + item.logo_path}}
               style={style.image}/>
        <View style={style.detailsContainer}>

        </View>
    </View>;
};
