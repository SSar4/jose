import * as React from 'react';
import { Appbar, Colors, TextInput, Button } from 'react-native-paper';
import {
    View,
    StyleSheet,
    Alert
} from 'react-native'
import { Title } from 'react-native-paper';
import api from '../sever/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUsuario} from '../contexto/usuario'
const MyComponent = ({ navigation }) => {
    const _goBack = () => navigation.navigate('Cadastro');

    //const _handleSearch = () => console.log('Searching');

    //const _handleMore = () => console.log('Shown more');
    
    const [text, setText] = React.useState('');
    const {usuario,setUsuario} = useUsuario()
    function recuperarsenha() {
        api.post('http://192.168.0.103:8084/api/usuarios/reenviaremail', {
          email: text
    
        }).then((response) => {
          if (response.status == 200) {
            navigation.navigate('RecuperarSenha')
    
          }
        }).
          catch((response) => Alert.alert("Email incorretos!")
    
          )
      }
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.Header}>
                <Appbar.BackAction onPress={_goBack} color='white' />
                <Appbar.Content title="Recuperar senha" titleStyle={{ color: 'white' }} />
            </Appbar.Header>
            <View style={styles.grid}>
                <Title style={styles.label}> Insira o email para recuperar sua senha</Title>
                <View style={styles.gridinput}>
                    <TextInput
                        theme={{ colors: { primary: '#BADA55' } }}
                        label="email" autoCapitalize='none' keyboardType='email-address'
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <Button style={styles.btn} icon="send" mode="contained" onPress={() =>recuperarsenha()}>
                    Enviar
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
        marginTop: 50,
        fontSize:18,
        width:'100%'
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