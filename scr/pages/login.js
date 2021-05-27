import React from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { TextInput, Button, Colors, Title } from 'react-native-paper';

const KeyboardAvoidingComponent = ({navigation}) => {
    const [text, setText] = React.useState('');
    const [senha, setSenha] = React.useState();

   
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>EventService</Text>
          <View style={styles.textInput}>
          <TextInput
            label="Email"
            theme={{colors:{primary:'#00aaff'}}}
            value={text}
            onChangeText={text => setText(text)}
            />
          </View>
          <View style={styles.textInput}>
          <TextInput
            secureTextEntry={true}
            label="Senha"
            theme={{colors:{primary:'#00aaff'}}}
            value={text}
            onChangeText={text => setSenha(text)}
            />
          </View>
          <View style={styles.btnContainer}>
          <Button
          style={{backgroundColor:Colors.orange500,justifyContent:'center',flex:1,marginRight:10}}
           mode="contained" onPress={() => navigation.navigate('Home')}>
                Fechar 
          </Button>
          <Button 
          style={{backgroundColor:Colors.green500,justifyContent:'center',flex:1}}
          labelStyle={{textAlign:'center'}}
           mode="contained" onPress={() => console.log('Pressed')}>
             Entrar
          </Button>
          </View>
          <View style={styles.box1}>
            <Title 
            onPress={()=>navigation.navigate('RecuperarSenha')}
            style={styles.t1}>Esqueceu a Senha?</Title>
            <Title 
            onPress={()=>navigation.navigate('Cadastro')}
            style={styles.t1}>Criar Conta</Title>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    color:'#00aaff',
    fontSize: 30,
    alignSelf:'center',
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
    justifyContent:'space-between',
    height:60,
    width:'80%',
    alignSelf:'center',
    flexDirection:'row'
  },
  box1:{
      width:'80%',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      height:200,
  },
  t1:{
      color:'#00aaff',
      marginBottom:5
  }
});

export default KeyboardAvoidingComponent;