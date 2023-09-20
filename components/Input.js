import { View, StyleSheet, TextInput } from 'react-native'

export default function Input({placeholder}) {
    return (
        <View>
            <TextInput
            placeholder={placeholder}
            autoCorrect={false}
            style={styles.input}
            placeholderTextColor={'lightgrey'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 2,
        borderColor: '#FFCD38',
        padding: 10,
    }
})