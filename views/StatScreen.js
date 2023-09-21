import { View, Text, StyleSheet, ScrollView } from "react-native";
import Stat from "../components/Stat";
import globalStyles from "../assets/styles/style";
import Button from "../components/Button";
import { Icon } from "@rneui/base";

export function StatScreen() {

    return (
        <ScrollView
            contentContainerStyle={{width: '100%', height: '120%'}}
            bounces={false}>
            <View style={[globalStyles.center, globalStyles.fullScreen]}>
                <Text style={styles.title}>
                    Statistiques
                </Text>
                <View style={[{width: '90%', flexDirection: 'column', alignItems: 'center', marginBottom: -120}]}>
                    <Stat title={'Total sessions'} stat={5}/>
                    <Stat title={'Présences'} stat={3}/>
                    <Stat title={'Absences justifiées'} stat={1}/>
                    <Stat title={'Absences'} stat={2}/>
                    <Stat title={'Taux de présence'} stat={'60%'}/>
                </View>
                <Text style={{color: 'grey'}}>
                    Pendant les 3 derniers mois...
                </Text>
                <View style={[globalStyles.center, {width: '100%', paddingHorizontal: '10%', marginVertical: '5%'}]}>
                    <Button children={'Justifier une absence'}/>
                </View>
            </View>
            <View>
                <Text style={styles.title}>
                    Sessions manquées
                </Text>
                <View style={[globalStyles.center,{flexDirection: 'row', width: '100%', marginVertical:10, paddingHorizontal: 15}]}>
                    <View style={{flex: 0.3}}>
                        <Icon type="ionicon" name="book"/>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>
                            Rentrée
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text>
                                18/09/2023
                            </Text>
                            <Text>
                                09:00 - 12:30
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-end', flex: 1}}>
                        <Text>
                            Absent
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.center,{flexDirection: 'row', width: '100%', marginVertical:10, paddingHorizontal: 15}]}>
                    <View style={{flex: 0.3}}>
                        <Icon type="ionicon" name="book"/>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>
                            Rentrée
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text>
                                18/09/2023
                            </Text>
                            <Text>
                                09:00 - 12:30
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-end', flex: 1}}>
                        <Text>
                            Absent
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title:{
        alignSelf: 'flex-start',
        marginHorizontal: '10%',
        fontSize: 25,
        fontWeight: "bold",
    }
})