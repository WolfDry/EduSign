import { KeyboardAvoidingView, ScrollView, View, Image, StyleSheet, Text} from "react-native";
import Input from '../components/Input'
import globalStyles from "../assets/styles/style"

export function LoginScreen() {

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
                        <Input placeholder={'Email'}/>
                        <Input placeholder={'Mot de passe'}/>
                    </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    form:{
        flex: 3,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center'
    }
})