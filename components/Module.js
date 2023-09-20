import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";

// create a function called Module
const Module = ({ titleModule, timeModule }) => {
  const {
    moduleContainer,
    titleStyle,
    timeStyle,
    iconStyle,
    textContainer,
    iconCheck,
  } = styles;
  return (
    <View style={moduleContainer}>
      <Icon style={iconStyle} name="book" />
      <View style={textContainer}>
        <Text style={titleStyle}>{titleModule}</Text>
        <Text style={timeStyle}>{timeModule}</Text>
      </View>
      <View style={iconCheck}>
        <Icon style={iconStyle} name="check" />
      </View>
    </View>
  );
};

// create some styles
const styles = StyleSheet.create({
  moduleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center", 
    padding: 10,
    margin: 30,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  titleStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 40,
  },
  timeStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 10,
    fontWeight: "600",
  },
  iconCheck: {
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default Module;
