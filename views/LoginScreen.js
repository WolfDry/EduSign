import { KeyboardAvoidingView, ScrollView, View, Image, StyleSheet, Text} from "react-native";
import Input from '../components/Input'
import Button from "../components/Button";
import globalStyles from "../assets/styles/style"
import apiBaseUrl from '../api/apiConfig'
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import React from "react";

export function LoginScreen() {

    const [inputs, setInputs] = useState({})

    const [,setToken] = React.useContext(AuthContext)

    const handleOnchange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }))
    }

    console.log(setToken)

    const validate = async ()=>{
        try {
            const url = `${apiBaseUrl}api/auth/token/`
            const response = await axios.post(url, {
              email: inputs.email,
              password: inputs.password
            });
      
            if (response.status === 200) {
              setToken(response.data.access)
              setInputs({});
            } else {
                console.log(response.data)
                throw new Error("coucou");
            }
          } catch (error) {
            console.log(error)
            alert("Erreur catch " + error);
          }
    }

    return (
        
        <KeyboardAvoidingView style={globalStyles.fullScreen}>
            <ScrollView
                contentContainerStyle={globalStyles.fullScreen}
                bounces={false}>
                    <View style={[globalStyles.fullScreen, globalStyles.center]}>
                        <Image style={{ width: '45%', height: '25%' }} source={require('../assets/img/logo.png')} />
                    </View>
                    <View style={[globalStyles.center, globalStyles.fullScreen]}>
                        <Text style={{fontSize: 25}}>
                            Connecte toi
                        </Text>
                    </View>
                    <View style={[styles.form]}>
                        <Input placeholder={'Email'} onChangeText={text => handleOnchange(text, "email")}/>
                        <Input placeholder={'Mot de passe'} onChangeText={text => handleOnchange(text, "password")}/>
                    </View>
                    <View style={{flex: 1, width: '100%', paddingHorizontal:'25%'}}>
                        <Button children={'Connexion'} icon={'person'} buttonPress={validate}/>
                    </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    form:{
        flex: 1.5,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
    }
})