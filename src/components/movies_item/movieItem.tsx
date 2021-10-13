import React from "react";
import { View, Text, Image } from "react-native";
import style from "./style";

import { MovieModel} from "../../redux";
import {IMAGE_URL} from "../../utils/constants";


const logo = require("../../images/free.jpg");


interface MovieData {
  item: MovieModel
}

export const MovieItem = (props: MovieData) => {
  const { item } = props;
  return <View style={style.root}>


    <Image source={{ uri: IMAGE_URL + item.poster_path }}
           style={style.image} />
    <View style={style.detailsContainer}>
      {/*{Title}*/}
      <Text style={style.title} numberOfLines={3}>{item.title}</Text>
      <View style={style.subtitleContainer}>

        <Text style={style.subtitle} numberOfLines={1}>{
          new Date(item.release_date).getFullYear()}</Text>
        <View style={style.verticalLine} />
        <Text style={style.subtitle} numberOfLines={1}>{item.vote_average + " by " + item.vote_count + " votes"}</Text>
        <View style={style.verticalLine} />
        <Text style={style.subtitle} numberOfLines={3}>{item.original_language}</Text>
      </View>
      {/*{Description}*/}
      <Text style={style.description} numberOfLines={5}>{item.overview}</Text>
    </View>
  </View>;
};
