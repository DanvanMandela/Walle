import React from "react";
import { Text, View, Image } from "react-native";
const logo = require('../../images/walle.png');

import style from "./style";

export const Splash = () => {
  return <View >
    <Image source={logo}    />
  </View>;
};
