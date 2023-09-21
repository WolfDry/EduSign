import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import Button from "../components/Button";
import Module from "../components/Module";
import globalStyles from "../assets/styles/style";
import { Icon } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import axios from "axios";

export function AccueilScreen() {
  const [userFirstName, setUserFirstName] = useState("");

  //   useEffect(() => {
  //     // Utilisez Axios pour effectuer la requête à votre API
  //     axios
  //       .get("url_api")
  //       .then((response) => {
  //         // traiter correctement la réponse
  //         const data = response.data;
  //         // Mettez à jour l'état avec le prénom de l'utilisateur obtenu depuis l'API
  //         setUserFirstName(data.userFirstName);
  //       })
  //       .catch((error) => {
  //         console.error(
  //           "Erreur lors de la récupération du prénom de l'utilisateur :",
  //           error
  //         );
  //       });
  //   }, []);

  // condition that check if there are modules
  const [hasModules, setHasModules] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("url_appi")
  //       .then((response) => {
  //         const data = response.data;
  //         const modules = data.hasModules;
  //         setHasModules(modules.length > 0);
  //       })
  //       .catch((error) => {
  //         console.error("Erreur lors de la récupération des modules :", error);
  //       });
  //   }, []);

  return (
    <ScrollView contentContainerStyle={globalStyles.fullScreen}>
      <View style={{ flex: 0.3, justifyContent: "center" }}></View>
      <View style={[styles.contentUser]}>
        <Text style={[styles.nameUser]}>
          Hello, {userFirstName}
        </Text>
        <View style={[styles.btnHome]}>
          <Button children={"Justify an absence"} icon={'home-outline'} />
        </View>
      </View>
      <View style={[styles.textContent]}>
        <Text style={{ fontSize: 18 }}>Today</Text>
      </View>
      <View style={[styles.contentModule]}>
        <View>
            <Module
            titleModule={"Starter pack"}
            timeModule={"9:00 AM - 12:00 PM"}
            />
        </View>
        <View>
            <Module
            titleModule={"Starter pack"}
            timeModule={"9:00 AM - 12:00 PM"}
            />
        </View>
        <View>
            <Module
            titleModule={"Starter pack"}
            timeModule={"9:00 AM - 12:00 PM"}
            />
        </View>
        <View>
            <Module
            titleModule={"Starter pack"}
            timeModule={"9:00 AM - 12:00 PM"}
            />
        </View>
      </View>
      <View style={{ marginLeft: 20, marginTop: 160 }}>
        <Text
          style={{
            fontSize: 18,
            color: hasModules.length > 0 ? "#000000" : "#d3d3d3",
          }}
        >
          See all
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentUser: {
    marginBottom: 60,
  },
  nameUser: {
    fontSize: 23,
    marginLeft: 20,
    marginBottom: 40,
  },
  btnHome: {
    width: '50%',
    marginLeft: '10%'
  },
  textContent: {
    marginLeft: 20,
    marginBottom: 20,
  },
  contentModule: {
    flex: 0.5,
    flexDirection: "column",
  },
});
