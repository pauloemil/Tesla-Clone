import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";
import { Dimensions } from "react-native-web";
const index = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default index;
