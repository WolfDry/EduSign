import { KeyboardAvoidingView, ScrollView, View, Image, StyleSheet, Text} from "react-native";
import Input from '../components/Input'
import Button from "../components/Button";
import globalStyles from "../assets/styles/style"
import apiBaseUrl from '../api/apiConfig'
import { useState } from "react";
import axios from "axios";

export function LoginScreen() {

    const [inputs, setInputs] = useState({})

    // const {token} = useContext(AuthContext)

    // console.log(token)

    const handleOnchange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }))
    }

    const validate = async ()=>{
        try {
            const url = `${apiBaseUrl}api/auth/token`
            console.log(url)
            console.log(inputs)
            const response = await axios.post(url, {
              inputs
            });
      
            if (response.status === 201) {
              alert(` You have created: ${JSON.stringify(response.data)}`);
              setInputs({});
            } else {
              throw new Error("Erreur 200");
            }
          } catch (error) {
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