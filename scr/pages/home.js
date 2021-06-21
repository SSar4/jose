
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Alert,
  Image,
  
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Appbar, Colors, Card,Title,Paragraph } from 'react-native-paper';
import { useUsuario } from '../contexto/usuario'

const App = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);
  const { usuario,setUsuario} = useUsuario()
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => navigation.navigate('Login');
  async function logout(){
    await AsyncStorage.removeItem('@usuario')
    Alert.alert("Volte logo")
    setUsuario(null)
  }

  useEffect(() => getData(), []);

  const getData = () => {
    console.log('getData');
    setLoading(true);
    //Service to get the data from the server to render
    fetch('http://192.168.0.100:8081/api/eventos/?page='
      + offset)

      //Sending the currect offset with get request
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response
        setOffset(offset + 1);
        //Increasing the offset for the next API call
        setDataSource([...dataSource, ...responseJson]);
        setLoading(false);
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Carregar+</Text>
          {loading ? (
            <ActivityIndicator
              color="white"
              style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const ItemView = ({ item }) => {
    console.log(item)
    return (
      <Card 
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate('Event', {
          evento:item
        });
      }}
       style={{width:'90%',alignSelf:'center',marginBottom:10}}>
     < Card.Cover source={{  uri:`data:image/png;base64,${item.capa}`, }} />
    <Card style={{
        height:45,
        elevation:0}}>
    <Card.Title
          style={{
              marginTop:20,
              marginLeft:20,
              maxHeight:25,
              minHeight:25,
              borderRadius:10,
              elevation:3,
              width:'25%',height:100,backgroundColor:Colors.green300}}
              titleStyle={{
              color:'white',
              fontSize:10,
              paddingTop:0
          }}
          title={item.formato}/>
          
    </Card>
    <Card.Content>
    <Title>{item.titulo}</Title>
    <Card.Actions>
    <FontAwesome name="calendar" size={18} color={Colors.green300} />
    <Paragraph> {'Início: ' +item.dataInicio.slice(0,10)} </Paragraph>
    
    </Card.Actions>
    
    <Card.Actions>
    <Paragraph> {'Inscrições abertas em: ' +item.inicioInscricao.slice(0,10)} </Paragraph>
    </Card.Actions>
    
  </Card.Content>
    </Card>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.green400}></StatusBar>
      <Appbar.Header style={{ backgroundColor: Colors.green400 }}>
        <Appbar.Content title="EventService" color='white' />
        <Appbar.Action icon="calendar" onPress={_handleSearch} color='white' />
        {
          usuario ? <>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil') }>
              <Avatar.Image  size={24} source={{
                uri:
                  `data:image/png;base64,${usuario[0].foto}`,
              }} />
            </TouchableOpacity>

          </> : <>
            <Appbar.Action icon='login' onPress={_handleMore} color='white' />
          </>
        }

      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          renderItem={ItemView}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: Colors.green400,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;