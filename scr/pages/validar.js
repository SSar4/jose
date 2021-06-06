import * as React from 'react';
import { Appbar, Colors, TextInput, Button } from 'react-native-paper';
import {
    View,
    StyleSheet
} from 'react-native'
import { Title } from 'react-native-paper';
const MyComponent = ({ navigation }) => {
    const _goBack = () => navigation.navigate('Cadastro');

    //const _handleSearch = () => console.log('Searching');

    //const _handleMore = () => console.log('Shown more');
    const [text, setText] = React.useState('');
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.Header}>
                <Appbar.BackAction onPress={_goBack} color='white' />
                <Appbar.Content title="Validar conta" titleStyle={{ color: 'white' }} />
            </Appbar.Header>
            <View style={styles.grid}>
                <Title style={styles.label}>Insira o código que enviamos para o email que você cadastrou</Title>
                <View style={styles.gridinput}>
                    <TextInput
                        theme={{ colors: { primary: '#BADA55' } }}
                        label="codigo"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <Button style={styles.btn} icon="check" mode="contained" onPress={() => console.log('Pressed')}>
                    Validar
               </Button>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

        justifyContent: 'center',

    },
    Header: {
        backgroundColor: Colors.green400
    },
    grid: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center',


    },
    gridinput: {
        width: '85%',
        height: 40,
        marginTop: 40,
        alignSelf: 'center'

    },
    label: {
        textAlign: 'center',
        fontWeight: 'normal',
        alignSelf: 'flex-start',
        marginTop: 50
    },
    btn:{
        width: '85%',
        height: 40,
        marginTop: 40,
        alignSelf: 'center',
        backgroundColor:Colors.green400
    }
})

export default MyComponent;