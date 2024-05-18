import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Content = (props) => {
  return (
    <View style={styles.content}>
      <Text style={styles.info}>{props.temp ? `${props.temp}°C` : "N/A"}</Text>
      <Text style={styles.info}>{props.weather || "Weather"}</Text>
      <Text style={styles.cityName}>{props.city}</Text>
      <Text style={styles.countryName}>{props.countryCode}</Text>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
  info: {
    fontSize: 50,
    color: "black",
    paddingLeft: 20,
    paddingTop: 50,
  },
  countryName: {
    color: "black",
    fontSize: 25,
    paddingLeft: 20,
  },
  cityName: {
    fontSize: 35,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 25,
  },
});
