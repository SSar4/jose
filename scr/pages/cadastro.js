import React from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard, Alert  } from 'react-native';
import { TextInput, Button, Colors, Title } from 'react-native-paper';
import{useUsuario} from '../contexto/usuario'
import api from "../sever/index"

export default function App({navigation}) {

    const [nome, setNome] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [email, setEmail] = React.useState('');
    const {usuario,setUsuario} = useUsuario()
    async function cadastrar(){
      //Alert.alert("oi")
      api.post('http://192.168.0.100:8084/api/usuarios/',{
        nome:nome,
        email:email,
        senha:senha
      }).then((res)=>{
        console.log('erro cadastro',res.data)
        
          Alert.alert('Enviamos um código de validadação para o email que você informou')
          navigation.navigate('Validar')
        
        
      }).catch((e)=>Alert.alert('Erro tente novamente'))
      
    }

    return(
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Cadastre-se</Text>
          <View>
          <TextInput
          theme={{colors:{primary:'#00aaff'}}}
            label="Nome"
            value={nome}
            onChangeText={text => setNome(text)}
          />
          </View>
          <View>
          <TextInput
          theme={{colors:{primary:'#00aaff'}}}
            label="Email" autoCapitalize='none' keyboardType= 'email-address'
            value={email}
            onChangeText={text => setEmail(text)}
          />
          </View>
          <View>
          <TextInput
          theme={{colors:{primary:'#00aaff'}}}
            label="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={text => setSenha(text)}
          />
          </View>
          <View style={styles.btnContainer}>
          <Button
          style={{backgroundColor:Colors.orange500,justifyContent:'center',flex:1,marginRight:10}}
           mode="contained" onPress={() => navigation.navigate('Home')}>
                cancelar
          </Button>
          <Button 
          style={{backgroundColor:Colors.green500,justifyContent:'center',flex:1}}
          labelStyle={{textAlign:'center'}}
           mode="contained" onPress={() => cadastrar()}>
             salvar
          </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 28,
      color:'#00aaff',
      textAlign:'center'
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
        marginTop: 12,
        justifyContent:'space-between',
        height:60,
        width:'80%',
        alignSelf:'center',
        flexDirection:'row'
    }
  });