import { View, StyleSheet, Text } from 'react-native'
import globalStyles from '../assets/styles/style'

export default function Stat({title, stat}) {
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };
    return (
        <View style={[styles.stat, {backgroundColor: generateColor()}]}>
            <Text style={[{fontSize: 15, flex: 1}]}>
                {title}
            </Text>
            <Text style={[{flex: 2, fontSize: 40, fontWeight: 'bold'}]}>
                {stat}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    stat:{
        margin: 15,
        padding: 10,
        justifyContent: 'center',
        width: 125,
        borderRadius: 25,
    }
})