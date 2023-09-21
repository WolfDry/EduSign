import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";

// create a function called Button
const Button = ({ buttonPress, children, icon }) => {
  const { buttonStyle, textStyle, buttonContainer, iconStyle } = styles;
  return (
      <TouchableOpacity onPress={buttonPress} style={buttonStyle}>
        {
          icon && <Icon style={iconStyle} type='ionicon' name={icon} size={20} />
        }
        <Text style={textStyle }> {children} </Text>
      </TouchableOpacity>
  );
};

// create some styles
const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
  },
  buttonStyle: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 12,
    width: '100%',
    backgroundColor: "#ffc107",
    opacity: 0.8,
  },
  iconStyle: {
    alignItems: "center",
    fontWeight: "600",
  },
});

export default Button;
