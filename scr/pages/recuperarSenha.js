import React, {useMemo} from 'react';
import { View,ScrollView, KeyboardAvoidingView, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from 'react-native';
import { TextInput, Button, Colors, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../sever/index'
export default function App({navigation}) {

    const [codigo, setCodigo] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [confSenha, setConfsenha] = React.useState('');
    const [visibility,setVisibility] = React.useState(false)
    const Validar = useMemo(()=><ValidadorSenha senha={senha}/>,[senha])
    const Confirm = useMemo(()=><ConfirmarSenha senha1={senha} senha2={confSenha}/>,[confSenha])
    function ValidadorSenha({senha}) {
        ///[^a-zA-Z 0-9]/g
        let regex = /^[0-9-A-Z-a-z]+$/
        console.log(regex.test(senha))
       if(senha.length==0){
        return(<></>)
       }
       if(senha.length>5){
        return(<Text style={{color:Colors.green300}}>Senha valida</Text>)
       }
       if(regex.test(senha)){
        return(<></>)
    }else{
        return(<Text style={{color:Colors.red300}}>Senha invalida</Text>)
    }
    }
    function ConfirmarSenha({senha1,senha2}) {
        if(senha1==''&&senha2==''){
            return(<></>)
        }
        if(senha1===senha2){
            return(<Text style={{color:Colors.green300}}>Senha valida</Text>)
        }
        if(senha2.length>0){
            return(<Text style={{color:Colors.red300}}>Senha invalida</Text>)
        }
        else{
            return(<></>)
        }
    }
    function novasena() {
      api.post('http://192.168.0.103:8084/api/usuarios/novaSenha', {
        id: codigo,
        senha:senha
  
      }).then((response) => {
        if (response.status == 200) {
          console.log(response.data)
          navigation.navigate('Login')
  
        }
      }).
        catch((response) => Alert.alert("Erro tente novamente!")
  
        )
    }
    return(
      <ScrollView>
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Recuperar Senha</Text>
          <View>
          <TextInput
           style={{marginTop:10}}
          theme={{colors:{primary:'#00aaff'}}}
            label="Digite seu codigo"
            value={codigo}
            onChangeText={text => setCodigo(text)}
          />
          
          </View>
          <View>
          <TextInput
           style={{marginTop:10}}
          theme={{colors:{primary:'#00aaff'}}}
            label="Nova senha"
            secureTextEntry={visibility ? false : true}
            value={senha}
            onChangeText={text => setSenha(text)}
          />
          <TouchableOpacity 
          onPress={()=>setVisibility(!visibility)}
          style={{position:'absolute',alignSelf:'flex-end',right:10,top:'25%'}}>
          {
              visibility ?
              <MaterialIcons name="visibility" size={24} color="black" />
              :
              <MaterialIcons name="visibility-off" size={24} color="black" />
          }
          </TouchableOpacity>
          {Validar}
          </View>
          <View>
          <TextInput
          style={{marginTop:10}}
          theme={{colors:{primary:'#00aaff'}}}
            label="Confirme a senha"
            secureTextEntry={visibility ? false : true}
            value={confSenha}
            onChangeText={text => setConfsenha(text)}
          />
          <TouchableOpacity 
          onPress={()=>setVisibility(!visibility)}
          style={{position:'absolute',alignSelf:'flex-end',right:10,top:'25%'}}>
          {
              visibility ?
              <MaterialIcons name="visibility" size={24} color="black" />
              :
              <MaterialIcons name="visibility-off" size={24} color="black" />
          }
          </TouchableOpacity>
          {Confirm}
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
           mode="contained" onPress={() => novasena()}>
             salvar
          </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
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
      marginBottom: 36,
      marginTop:10
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