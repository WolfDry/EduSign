import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../assets/styles/style";
import { Icon } from "@rneui/base";

export function DocScreen() {

    return (
        <View style={[globalStyles.fullScreen, {marginVertical: '15%'}]}>
            <View>
                <Text style={[styles.title, {fontSize: 25}]}>
                    Documents
                </Text>
            </View>
            <View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 10}}>
                    <Text style={styles.title}>
                        En attente de signatures
                    </Text>
                    <Text>
                        Cacher
                    </Text>
                </View>
                <View style={{flexDirection:'row', paddingHorizontal: 10, marginHorizontal: '5%', alignItems: 'center'}}>
                    <Icon type="ionicon" name="checkmark" color={'grey'}/>
                    <Text  style={{color: 'grey', fontSize: 15}}>
                        Aucun document à signer
                    </Text>
                </View>
            </View>
            <View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 10}}>
                    <Text style={styles.title}>
                        Complets
                    </Text>
                    <Text style={{alignSelf: 'flex-end'}}>
                        Cacher
                    </Text>
                </View>
                <View style={{flexDirection:'row', paddingHorizontal: 10, marginHorizontal: '5%', alignItems: 'center'}}>
                    <Icon type="ionicon" name="checkmark" color={'grey'}/>
                    <Text style={{color: 'grey', fontSize: 15}}>
                        Aucun document complet
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        alignSelf: 'flex-start',
        marginHorizontal: '5%',
        fontSize: 20,
        fontWeight: "bold",
    }
})