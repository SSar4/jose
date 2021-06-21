import * as React from 'react';
import { Appbar, Card, Colors, Headline, Button,Title,Paragraph } from 'react-native-paper';
import { StatusBar, StyleSheet, View, Text, ScrollView, Alert } from 'react-native'
import MapView from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App({ navigation, route }) {
  const { evento } = route.params;
  console.log(evento)

  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  function incricao(){
    Alert.alert("Você está inscrito para o evento "+ evento.endereco.localizacao.lat+'   '+ evento.endereco.localizacao.lat)
  }

  function credenciar(){

  }

  return (
    <View style={styles.container}>
      <StatusBar ></StatusBar>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={_goBack} color='white' />
        <Appbar.Content title=" " subtitle=" " color='white' />
        <Appbar.Action icon="menu" onPress={_handleMore} color='white' />
        <Appbar.Action icon="magnify" onPress={_handleSearch} color='white' />
      </Appbar.Header>
      <ScrollView>
        <Headline style={styles.titulo}>{evento.titulo}</Headline>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: `data:image/png;base64,${evento.capa}`, }} />
          <Card.Actions>
            <Button color='#00aaff' onPress={() => navigation.navigate('Credenciar',{evento:evento})}>Credenciar-se</Button>
          </Card.Actions>
          <Card.Title title="Inscriçõs abertas" subtitle={evento.inicioInscricao.slice(0, 10)
            + ' até ' + evento.inicioInscricao.slice(0, 10)} />
          <Card.Content>
            <Title>Início do evento</Title>
           <View style={{flexDirection:'row'}}>
           <FontAwesome5 name="calendar-day" size={20} color={Colors.green400}  />
              <Paragraph style={{marginLeft:10}}>{'Início: '+evento.dataInicio}</Paragraph>
              </View>
              <View style={{flexDirection:'row'}}>
           <FontAwesome5 name="calendar-day" size={20} color={Colors.green400}  />
              <Paragraph style={{marginLeft:10}}>{'Termino: '+evento.dataTernino}</Paragraph>
              </View>
          </Card.Content>
          <View>
                <Button style={styles.btn} icon="check" mode="contained" onPress={() =>incricao()}>
                    Participar
               </Button>
            </View>
          <Text style={[styles.text, { textAlign: 'justify' }]}>
               Descrição: {evento.descricao}
          </Text>
          
          <View style={styles.containermap}>
            <MapView

              rotateEnabled={false}
              initialRegion={{
                latitude: Number(evento.endereco.localizacao.lat),
                longitude: Number(evento.endereco.localizacao.lng),
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0124
              }}
              customMapStyle={
                [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]
              }
              style={styles.map}>
              <MapView.Circle
                center={{
                  latitude: Number(evento.endereco.localizacao.lat),
                longitude: Number(evento.endereco.localizacao.lng),
                }}
                radius={25}
                strokeWidth={5}
                strokeColor="#3399ff"
                fillColor="#80bfff"
              />
            </MapView>
            
          </View>
          
        </Card>
      </ScrollView>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: Colors.green400
  },
  titulo: {
    textAlign: 'center',
    color: '#00aaff'
  },
  card: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 10,
    elevation: 0
  },
  text: {
    width: '70%',
    //alignSelf: 'flex-end',
    marginLeft:15,
    marginRight: 15,
    letterSpacing: 0.6,
    lineHeight: 22,
    marginBottom: 20,
    marginTop:20
  },
  containermap: {
    width: '100%',
    marginBottom: 50,
    height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  btn:{
    marginTop:10,
    backgroundColor:Colors.green400
  }

})