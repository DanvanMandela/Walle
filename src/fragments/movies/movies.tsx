import React, {useState, useEffect} from "react";
import {FlatList, Image, ScrollView, Text, View} from "react-native";
import style from "../splash/style";

import {useSelector, useDispatch, connect} from "react-redux";
import {ApplicationState, onFetchMovies, onNavigationMovie} from "../../redux";
import {MovieItem} from "../../components/movies_item/movieItem";
import {bindActionCreators, Dispatch, AnyAction} from "redux";
import PropTypes from "prop-types";

const Movies = () => {

    const [data, getData] = useState("");

    const dispatch = useDispatch();

    const {movie, error} = useSelector((state: ApplicationState) => state.movieReducer);


    const {results} = movie;


    dispatch(onFetchMovies());

    return <View style={style.root}>
        <FlatList
            ListFooterComponent={<View/>}
            ListFooterComponentStyle={{height: 110}}
            showsVerticalScrollIndicator={false}
            data={results}
            keyExtractor={(item, index) => item.id + index}
            renderItem={({item}) => <MovieItem item={item}/>}
        />
    </View>;
};

Movies.propTypes = {
    onNavigationMovie: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            onNavigationMovie: onNavigationMovie
        },
        dispatch
    );

export default connect(
    null,
    mapDispatchToProps
)(Movies);
