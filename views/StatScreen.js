import { FlatList, View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import Stat from "../components/Stat";
import globalStyles from "../assets/styles/style";
import Button from "../components/Button";

export function StatScreen() {
    
    const stats = [
        {
            id:1,
            title: 'Total sessions',
            data: 5,
        },
        {
            id: 2,
            title: 'Présences',
            data: 3,
        },
        {
            id: 3,
            title: 'Absences justifiées',
            data: 1,
        },
        {
            id: 4,
            title: 'Absences',
            data: 2,
        },
        {
            id: 5,
            title: 'Taux de présence',
            data: '60%',
        }
    ]
    return (
        <KeyboardAvoidingView style={globalStyles.fullScreen}>
            <ScrollView
                contentContainerStyle={globalStyles.fullScreen}
                bounces={false}>
                <View style={[globalStyles.center, globalStyles.fullScreen]}>
                    <Text style={styles.stat}>
                        Statistiques
                    </Text>
                    <View style={[{width: '90%', flexDirection: 'column'}, globalStyles.center]}>
                        <Stat title={'Total sessions'} stat={5}/>
                        <Stat title={'Présences'} stat={3}/>
                        <Stat title={'Absences justifiées'} stat={1}/>
                        <Stat title={'Absences'} stat={2}/>
                        <Stat title={'Taux de présence'} stat={'60%'}/>
                    </View>
                    <Text style={{color: 'grey', margin: 10}}>
                        Pendant les 3 derniers mois...
                    </Text>
                    <View style={[globalStyles.center, {width: '100%', paddingHorizontal: '10%', marginVertical: '5%'}]}>
                        <Button children={'Justifier une absence'}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.stat}>
                        Sessions manquées
                    </Text>                    
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    stat:{
        alignSelf: 'flex-start',
        marginHorizontal: '10%',
        marginVertical: '5%',
        fontSize: 25,
        fontWeight: "bold",
    }
})