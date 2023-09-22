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
    <View style={[globalStyles.fullScreen, {paddingVertical: '20%', paddingHorizontal: '7%'}]}>
        <Pressable onPress={()=> navigation.goBack()}>
            <Text>
                Retour
            </Text>
        </Pressable>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '5%'}}>
            <Icon type="ionicon" name="alarm"/>
            <View style={{marginHorizontal: '5%'}}>
                <Text>09:00 - 12:30</Text>
                <Text>22/09/2023</Text>
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '5%'}}>
            <Icon type="ionicon" name="home"/>
            <View style={{marginHorizontal: '5%'}}>
                <Text>V 005</Text>
                <Text>Salle</Text>
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: '5%'}}>
            <Icon type="ionicon" name="person"/>
            <View style={{marginHorizontal: '5%'}}>
                <Text>Benjamin Delamarre</Text>
                <Text>Intervenant</Text>
            </View>
        </View>
        <View style={{flex: 4, marginVertical: '5%'}}>
            <Text>
                Description
            </Text>
            <Text>
                MBA1 Développeur Full-Stack
            </Text>
        </View>
        <View>
            <Button children={'Signe & Scan'} icon={'qr-code'}/>
        </View>
    </View>
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
