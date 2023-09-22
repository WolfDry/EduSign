import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import globalStyles from "../assets/styles/style";
import axios from "axios";
import { Icon } from "@rneui/themed";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import apiBaseUrl from "../api/apiConfig";

export function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSavePassword = () => {
    axios
      .post(`${apiBaseUrl}/user/change-password`, {
        currentPassword: currentPassword,
        newPassword: newPassword,
      })
      .then((response) => {
        if (response.data.success) {
          Alert.alert("Success", "Your password has been changed");
          setCurrentPassword("");
          setNewPassword("");
          setRepeatPassword("");
        } else {
          Alert.alert("Error", "Your password has not been changed");
        }
      })
      .catch((error) => {
        console.error("Error :", error);
        Alert.alert("Error", "An error occured while changing your password");
      });
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.fullScreen}>
      <View style={[styles.form, { marginTop: 160 }]}>
        <Input
          placeholder={"Current password"}
          secureTextEntry={true} // Masquez le texte du mot de passe
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
        />
        <Input
          placeholder={"New password"}
          secureTextEntry={true}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <Input
          placeholder={"Repeat password"}
          secureTextEntry={true}
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
        />
      </View>
      <View style={styles.instructionsContainer}>
        {[
          "Contains at least 8 characters",
          "Contains at least one uppercase",
          "Contains at least one lowercase",
          "Contains at least one number",
          "The passwords match",
        ].map((text, index) => (
          <View style={styles.instructionsContent} key={index}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
                gap: 10,
              }}
            >
              <Icon
                style={styles.icon}
                name="ellipse"
                type="ionicon"
                color="red"
                size={13}
              />
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, width: "100%", paddingHorizontal: "25%" }}>
        <Button children={"Save"} onPress={handleSavePassword} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 0.5,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
  },

  instructionsContainer: {
    flex: 0.5,
    gap: 5,
  },
});
