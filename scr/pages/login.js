import React, { useState , useMemo} from 'react';
import {
  View, Alert, KeyboardAvoidingView,
  StyleSheet, Text, Platform,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUsuario } from '../contexto/usuario'
import { TextInput, Button, Colors, Title, Provider } from 'react-native-paper';
import api from '../sever/index'

const KeyboardAvoidingComponent = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [emailderecuperacao, setEmailderecuperacao] = useState();
  const [senha, setSenha] = React.useState();
  const { usuario, setUsuario } = useUsuario()
  const [visible, setVisible] = React.useState(false);
  

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const login = () => {
    let user = new Object();
    user.email = text
    user.senha = senha
    api.post('http://192.168.0.100:8084/api/usuarios/login', {
      email: text,
      senha: senha
    }).then((response) => {
      console.log(response.data[0])
      if (response.data[0].id != null) {
        //navigation.navigate('Perfil')
        setUsuario(response.data)

        AsyncStorage.setItem('@usuario', JSON.stringify(response.data))

          .then((res) => Alert.alert('Ola bem-vindo')).catch((E) => Alert.alert("Erro no login"))
      }
      else Alert.alert("Usuário ou senha incorretos!")
    }).
      catch((response) => Alert.alert("Usuário ou senha incorretos!")

      )

  }
  function Validaemail({ validaemail }) {
    return (<TextInput style={styles.textInputrecuperacao}
      theme={{ colors: { primary: '#BADA55' } }}
      label="Email" autoCapitalize='none' keyboardType='email-address'
      value={emailderecuperacao}
      onChangeText={text => setEmailderecuperacao(text)}
    />)
  }
 
  return (
    <Provider>
     
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>EventService</Text>
            <View style={styles.textInput}>
              <TextInput
                label="Email" autoCapitalize="none"
                theme={{ colors: { primary: '#00aaff' } }}
                value={text}
                onChangeText={text => setText(text)}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput
                secureTextEntry={true}
                label="Senha"
                theme={{ colors: { primary: '#00aaff' } }}
                value={senha}
                onChangeText={text => setSenha(text)}
              />
            </View>
            <View style={styles.btnContainer}>
              <Button
                style={{ backgroundColor: Colors.orange500, justifyContent: 'center', flex: 1, marginRight: 10 }}
                mode="contained" onPress={() => navigation.navigate('Home')}>
                Fechar
          </Button>
              <Button
                style={{ backgroundColor: Colors.green500, justifyContent: 'center', flex: 1 }}
                labelStyle={{ textAlign: 'center' }}
                mode="contained" onPress={login}>
                Entrar
          </Button>
            </View>
            <View style={styles.box1}>
              <Title
                onPress={() => navigation.navigate('Recsenha')}
                style={styles.t1}>Esqueceu a Senha?</Title>
              <Title
                onPress={() => navigation.navigate('Cadastro')}
                style={styles.t1}>Criar Conta</Title>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    //justifyContent: "space-around"
  },
  header: {
    color: '#00aaff',
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 50
  },
  btnContainer: {
    marginTop: 12,
    justifyContent: 'space-between',
    height: 60,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  box1: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 200,
  },
  t1: {
    color: '#00aaff',
    marginBottom: 5
  }, textInputrecuperacao: {
    height: 50,
    marginTop: 5
  }
});

export default KeyboardAvoidingComponent;
