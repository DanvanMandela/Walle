import React from "react";
import {Image, StyleSheet, View, Text} from "react-native";
import style from "./style";
import {MovieModel} from "../../redux";
import {IMAGE_URL} from "../../utils/constants";

interface MovieData {
    item: MovieModel
}

export const RecentMovies = (props: MovieData) => {
    const {item} = props;
    return (
        <View style={style.container}>
            <Image source={{uri: IMAGE_URL + item.poster_path}} style={{height: 200, width: 150}}/>
        </View>
    );
}
