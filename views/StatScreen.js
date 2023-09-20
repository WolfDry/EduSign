import { View } from "react-native";
import Stat from "../components/Stat";
import globalStyles from "../assets/styles/style"

export function StatScreen() {

    return (
        <View style={[globalStyles.center, globalStyles.fullScreen]}>
            <View style={[{width: '90%', height: '22%', flexDirection: 'row', flexWrap: 'wrap'}, globalStyles.center]}>
                <Stat title={'Total sessions'} stat={'5'}/>
                <Stat title={'Présences'} stat={'5'}/>
                <Stat title={'Absences justifiées'} stat={'5'}/>
                <Stat title={'Absences'} stat={'5'}/>
            </View>
        </View>
    )
}