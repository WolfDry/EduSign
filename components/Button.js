import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";

// create a function called Button
const Button = ({ buttonPress, children }) => {
  const { buttonStyle, textStyle, buttonContainer, iconStyle } = styles;
  return (
    <View style={buttonContainer}>
      <TouchableOpacity onPress={buttonPress} style={buttonStyle}>
        <Text style={textStyle }> {children} </Text>
        <Icon style={iconStyle} name="home-outline" type="ionicon" />
      </TouchableOpacity>
    </View>
  );
};

// create some styles
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
  },
  textStyle: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
    marginRight: 10,
  },
  buttonStyle: {
    flexDirection: "row-reverse",
    alignSelf: "center",
    padding: 10,
    width: 190,
    backgroundColor: "#ffc107",
    opacity: 0.8,
  },
  iconStyle: {
    alignItems: "center",
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default Button;
