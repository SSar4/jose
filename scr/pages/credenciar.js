import * as React from 'react';
import { Appbar, Colors, TextInput, Button } from 'react-native-paper';
import {
    View,
    StyleSheet,
    Alert, 
    Text
} from 'react-native'
import { Title } from 'react-native-paper';
import api from '../sever/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUsuario} from '../contexto/usuario'
const MyComponent = ({ navigation,route }) => {
    const { evento } = route.params;
    const _goBack = () => navigation.navigate('Event');

    //const _handleSearch = () => console.log('Searching');

    //const _handleMore = () => console.log('Shown more');
    
    const [text, setText] = React.useState('');
    const {usuario,setUsuario} = useUsuario()
    function validar(){
        api.post('http://192.168.0.103:8084/api/usuarios/habilitar/',{
            id:text

        }).then((res)=>{
            
                AsyncStorage.setItem('@usuario',JSON.stringify(res.data)).catch((e)=>{
                    Alert.alert('Erro ao salvat no storege')
                })
                setUsuario(res.data)
            
        }).catch((e)=>{
            Alert.alert("erro ao validar tente novamente")
        })
    }
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.Header}>
                <Appbar.BackAction onPress={_goBack} color='white' />
                <Appbar.Content title="entrar no evento" titleStyle={{ color: 'white' }} />
            </Appbar.Header>
            <View style={styles.grid}>
         <Text style={styles.titulo}>Mostre o código para confirmar entrada evento: {evento.titulo}</Text>   
               
                <Button style={styles.btn} icon="check" mode="contained"  onPress={() => navigation.navigate('Event')}>
                    OK
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
    titulo: {
        textAlign: 'center',
        color: '#00aaff',
        fontSize: 18,
        alignItems:'center'
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