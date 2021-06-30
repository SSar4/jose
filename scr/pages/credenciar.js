import * as React from 'react';
import { Appbar, Card, Colors, Headline, Button,Title,Paragraph } from 'react-native-paper';
import { StatusBar, StyleSheet, View, Text, ScrollView, Alert } from 'react-native'
import MapView from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
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
        api.post('http://192.168.0.100:8084/api/usuarios/habilitar/',{
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
                <Appbar.Content title="Entrar no evento" titleStyle={{ color: 'white' }} />
            </Appbar.Header>
            <View style={styles.grid}>
         <Text style={styles.titulo}>Mostre o código para confirmar entrada no: {evento.titulo}</Text>   
               <View style={styles.qrcode}> 
               < Card.Cover source={require('../../assets/qrcode.png')} />
               
               </View>
                <Button style={styles.btn} icon="check" mode="contained"  onPress={() => navigation.navigate('Event')}>
                    OK
               </Button>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    //< Card.Cover source={{  uri:`data:image/png;base64,${evento.capa}`, }} />
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
    qrcode:{
        marginTop:10,
        width:'80%',
        //height:'50%',
        justifyContent:'center',
        alignContent:'center',
        marginLeft:30
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