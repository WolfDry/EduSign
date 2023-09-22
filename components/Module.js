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
    iconBook,
  } = styles;
  return (
    <View style={moduleContainer}>
      <Icon style={iconBook} name="book" type="ionicon" />
      <View style={textContainer}>
        <Text style={titleStyle}>{titleModule}</Text>
        <Text style={timeStyle}>{timeModule}</Text>
      </View>
      <View style={iconCheck}>
        <Icon style={iconStyle} name="checkmark-outline" type="ionicon"  color="green"/>
      </View>
    </View>
  );
};

// create some styles
const styles = StyleSheet.create({
  moduleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  titleStyle: {
    alignSelf: "center",
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 40,
  },
  timeStyle: {
    color: "#d3d3d3",
    fontSize: 10,
    fontWeight: "600",
  },
  iconCheck: {
    marginLeft: "auto",
    marginRight: 10,
  },
  iconBook: {
    backgroundColor: "#d3d3d3",
    padding: 10,
    borderRadius: 5,
  }
});

export default Module;
