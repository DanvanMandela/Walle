import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { Icon } from "react-native-vector-icons/Icon";

export const CustomToolbar = () => {

  return (
    <View style={styles.navBar}>
      <Text style={styles.middleContainer}>
        {"Wall-e"}
      </Text>
      <View style={styles.rightContainer}>

        <View style={styles.rightIcon}>

        </View>
      </View>
    </View>
  );
};

