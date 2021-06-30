import * as React from 'react';
import {StyleSheet,View,Linking,Alert} from 'react-native'
import { DefaultTheme, Provider as PaperProvider,Avatar,
     Appbar,Colors, Portal,Dialog, Button, Card, Title, Paragraph } from 'react-native-paper';

     import {useUsuario} from '../contexto/usuario'
     import AsyncStorage from '@react-native-async-storage/async-storage'
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.green400,
    accent: Colors.green400,
  },
};

export default function Main({navigation}) {
  
  const _goBack = () =>navigation.goBack();

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  const {usuario,setUsuario} = useUsuario()
  
  async function logout(){
    await AsyncStorage.removeItem('@usuario')

    Alert.alert("Volte logo")
    setUsuario(null)
  }
  const [foto,setFoto] = React.useState('https://picsum.photos/700')

  const LeftContent = props => <Avatar.Image size={80} source={{ uri: `data:image/png;base64,${usuario[0].foto}`, }}  />

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} color='white'/>
      <Appbar.Content title="Perfil" 
      subtitleStyle={{color:'white'}}
      titleStyle={{color:'white'}}/>
      <Appbar.Action icon="dots-vertical" onPress={showDialog} color='white'/>
    </Appbar.Header>

    <Portal >
        <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialogo}>
          <Dialog.Actions>
            <Button icon='exit-run' onPress={()=> logout()}>Sair</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <Card style={{
        elevation:0,
        backgroundColor:'transparent'
      }}>
    <Card.Title title={usuario[0].nome} subtitle="just remember, if you look in the face of evil" 
    style={{marginTop:20}}
    left={LeftContent} 
    titleStyle={{marginLeft:40}}
    subtitleStyle={{
        flexWrap:'wrap',
        marginLeft:40}}/>
            <View style={{
        width:'100%',
        padding:10
    }}>
    <Button labelStyle={{color:'white'}} mode="contained" onPress={() => navigation.navigate('Editar')}>
    Editar Perfil
  </Button>
    </View>
    <Card.Content>
      <Title style={{
          fontSize:15,
          marginTop:10
      }}>Links</Title>
      <Paragraph 
      style={{
          color:'#00aaff',
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>https://www.linkedin.com/feed/?trk=onboarding-landing</Paragraph>
    <Paragraph 
      style={{
          color:'#00aaff',
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>http://lattes.cnpq.br/</Paragraph>
<Title style={{
          fontSize:15,
          marginTop:10
      }}>Contato</Title>
<Paragraph 
      style={{
          color:Colors.grey400,
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>{usuario[0].email}</Paragraph>
<Paragraph 
      style={{
          color:Colors.grey400,
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>(88) 99994 - 1212</Paragraph>
<Title style={{
          fontSize:15,
          marginTop:10
      }}>Formação acadêmica</Title>
<Paragraph 
      style={{
          color:Colors.grey400,
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>
        Instituto Federal da Paraiba IFPB-cz</Paragraph>
<Paragraph 
      style={{
          color:Colors.grey400,
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>Tecnologo - Analise e Desenvolvimento de Sistemas</Paragraph>
    <Title style={{
          fontSize:15,
          marginTop:10
      }}>Dados pessoais</Title>
      <View style={{
        flexDirection:'row'
      }}>
        <View>
        <Paragraph 
      style={{
          color:Colors.grey400,
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>
        Feminino</Paragraph>
        <Paragraph 
      style={{
          color:Colors.grey400,
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>
        16/10/1990 (Ceara)</Paragraph>
        </View>
        <View style={{
          marginLeft:40
        }}>
        <Paragraph 
      style={{
          color:Colors.grey400,
          fontSize:12
      }}
      onPress={() => Linking.openURL('http://google.com')}>
        000.000.000-00</Paragraph>
        </View>
      </View>
    </Card.Content>

  </Card>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    dialogo:{
        position:'absolute',
        top:10,
        right:0,
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
      container1:{
          width:'100%',
          height:180,
          padding:20,
      },
      container2:{
          flexDirection:'row'
      },
      container3:{
          width:'100%',
          height:'100%',
          padding:15,
          flexWrap:'nowrap'
      },
      Paragraph:{
          color:'#00aaff',
          lineHeight:13,
          paddingRight:4
      }
  });