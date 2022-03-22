import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

import StyledButton from "../StyledButton";
const CarItem = (props) => {
  const { modelName, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carcontainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{modelName}</Text>
        <Text style={styles.subtitle}>
          {tagline}&nbsp;<Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          text="Custom Order"
          onPress={() => console.warn("custom order was pressed!")}
        />
        <StyledButton
          type="secondary"
          text="Existing Inventory"
          onPress={() => {
            console.warn("existing inventory was pressed!");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
