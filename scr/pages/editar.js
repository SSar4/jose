import  React,{useState} from 'react';
import { DefaultTheme, Provider as PaperProvider,Appbar,Colors, Title } from 'react-native-paper';
import {View,Image,Platform} from 'react-native'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.white,
    accent: '#f1c40f',
  },
};

export default function Main({navigation}) {
    const _goBack = () =>navigation.goBack();

    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    const [image, setImage] = useState('https://picsum.photos/700');

    async function galery(){
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Precisamos do acesso a camera');
            }
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            hideDialog()
            setImage(result.uri);
          }
    }

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} color={Colors.red400} />
      <Appbar.Content
      title="Editar Perfil" 
      subtitleStyle={{color:'white'}}
      titleStyle={{color:'black'}}/>
      <Appbar.Action icon="check"  color='#00aaff'/>
    </Appbar.Header>
    <View style={{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }}>
        <Image
        style={{
            width:100,
            height:100,
            borderRadius:100
        }}
        source={{uri:image}}></Image>
        <Title 
        onPress={showDialog}
        style={{
            marginTop:10,
            color:'#00aaff'
        }}>Alterar foto</Title>
    </View>
    <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alterar foto do perfil</Dialog.Title>
          <Dialog.Actions style={{
              justifyContent:'flex-start',
              alignItems:'flex-start',
              flexDirection:'column'
          }}>
            <Button labelStyle={{color:Colors.green400}} onPress={hideDialog} icon='camera'>Camera</Button>
            <Button labelStyle={{color:Colors.green400}} onPress={()=>galery()} icon='folder'>Galeria</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      
    </PaperProvider>
  );
}