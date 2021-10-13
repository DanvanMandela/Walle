import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState, onFetchMovies} from "../../redux";
import {FlatList, View} from "react-native";
import {RecentMovies} from "./recent_movies";
import style from './style'

export const PopularMovie = () => {
    const dispatch = useDispatch();

    const {movie, error} = useSelector((state: ApplicationState) => state.movieReducer);
    dispatch(onFetchMovies())
    const {results} = movie

    return <View style={style.container}>
        <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(item, index) => item.id + index}
            renderItem={({item}) => <RecentMovies item={item}/>}
        />
    </View>
}
