import { ScrollView, Text, View, Image, StyleSheet, Pressable } from "react-native";
import Button from "../components/Button";
import Module from "../components/Module";
import globalStyles from "../assets/styles/style";
import { Icon } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import axios from "axios";

export function InfosModule({navigation}) {
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
  const [hasModules, setHasModules] = useState({id: 1});
  const [isDisplay, setIsDiplay] = useState(false)

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
        <Pressable onPress={()=>{navigation.navigate('Documents')}}>
            <Module
            titleModule={"Starter pack"}
            timeModule={"9:00 AM - 12:00 PM"}
            />
        </Pressable>
        <View>
            <Module
            titleModule={"Starter pack"}
            timeModule={"9:00 AM - 12:00 PM"}
            />
        </View>
      </View>
      <View style={{ marginLeft: '5%'}}>
        <Text
          style={{
            fontSize: 18,
            color: Object.keys(hasModules).length > 0 ? "#000000" : "#d3d3d3",
          }}
          onPress={()=>{setIsDiplay(!isDisplay)}}
        >
          See all
        </Text>
        {
          Object.keys(hasModules).length > 0 && isDisplay === true ? 
          <Text>
            <View>
                <Module
                titleModule={"Starter pack"}
                timeModule={"9:00 AM - 12:00 PM"}
                />
            </View>
          </Text>
          : <></>
        }
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
    marginLeft: '5%',
    marginBottom: 40,
  },
  btnHome: {
    width: '50%',
    marginLeft: '5%'
  },
  textContent: {
    marginLeft: '5%',
    marginBottom: 20,
  },
  contentModule: {
    // flex: 0.5,
    flexDirection: "column",
  },
});
