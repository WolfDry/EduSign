import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../assets/styles/style";

export function CalendrierScreen() {

    return (
        <View style={[globalStyles.fullScreen, {marginVertical: '15%'}]}>
            <View>
                <Text style={[styles.title, {fontSize: 25}]}>
                    Calendrier
                </Text>
            </View>
            <View>
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