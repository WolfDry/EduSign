import { Text, View, StyleSheet, ScrollView } from "react-native";
import globalStyles from "../assets/styles/style";
// import axios from "axios";
import { Icon } from "@rneui/themed";
import Input from "../components/Input";
import Button from "../components/Button";

export function ChangePassword() {
  return (
    <ScrollView contentContainerStyle={globalStyles.fullScreen}>
      <View style={[styles.form, { marginTop: 60 }]}>
        <Input placeholder={"Current password"} />
        <Input placeholder={"New password"} />
        <Input placeholder={"Repeat password"} />
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
                size={15}
              />
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, width: "100%", paddingHorizontal: "25%" }}>
        <Button children={"Save"} />
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
