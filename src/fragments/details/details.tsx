import React, {useState} from "react";
import {ApplicationState, onDetails, onFetchMovies} from "../../redux";
import {useSelector, useDispatch} from "react-redux";
import {FlatList, Image, ImageBackground, Platform, ScrollView, Text, View} from "react-native";
import style from "./style";
import {IMAGE_URL} from "../../utils/constants";
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import {MovieItem} from "../../components/movies_item/movieItem";
import {MovieOwners} from "../../components/movie_owners/movieOwners";
import {PopularMovie} from "../../components/popular_movies/movie_popular";


export const MovieDetails = (id: string) => {
    const dispatch = useDispatch();

    const {movie, error} = useSelector((state: ApplicationState) => state.movieDetailReducer);


    dispatch(onDetails(id));


    const {production_companies} = movie

    return <ScrollView
        style={style.root}

    >
        <View style={style.headerContainer}>
            <ImageBackground
                blurRadius={Platform.OS == 'ios' ? 10 : 5}
                style={style.imageBackground}
                source={{uri: "https://image.tmdb.org/t/p/original/" + movie.backdrop_path}}>
                <View>
                    <Image
                        source={{uri: "https://image.tmdb.org/t/p/original/" + movie.poster_path}}
                        style={style.image}/>
                </View>
            </ImageBackground>

        </View>
        <Text style={style.title} numberOfLines={3}>{movie.title}</Text>

        <View style={style.subtitleContainer}>

            <Text style={style.subtitle} numberOfLines={1}>{
                new Date(movie.release_date).getFullYear()}</Text>
            <View style={style.verticalLine}/>
            <Text style={style.subtitle}
                  numberOfLines={1}>{movie.vote_average + " by " + movie.vote_count + " votes"}</Text>
            <View style={style.verticalLine}/>
            <Text style={style.subtitle} numberOfLines={3}>{movie.original_language}</Text>
            <View style={style.verticalLine}/>
            <Text style={style.subtitle} numberOfLines={3}>{movie.runtime + "mins"}</Text>
        </View>
        <View style={style.subtitleContainer}>
            <Text style={style.subtitle} numberOfLines={3}>{movie.homepage}</Text>
        </View>
        <Text style={style.description}>{movie.overview}</Text>

        <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={production_companies}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({item}) => <MovieOwners item={item}/>}
        />

        <View style={style.root}>
            <Text style={style.description}>{"Popular"}</Text>
            <PopularMovie/>
        </View>


    </ScrollView>;
};

