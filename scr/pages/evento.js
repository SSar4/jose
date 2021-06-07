import * as React from 'react';
import { Appbar, Card, Colors, Headline, Button,Title,Paragraph } from 'react-native-paper';
import { StatusBar, StyleSheet, View, Text, ScrollView } from 'react-native'
import MapView from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App({ navigation, route }) {
  const { evento } = route.params;
  console.log(evento)

  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.grey600}></StatusBar>
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
            <Button color='#00aaff'>Credenciar-se</Button>
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

          <Text style={[styles.text, { textAlign: 'justify' }]}>
                {evento.descricao}
          </Text>
          <View style={styles.containermap}>
            <MapView

              rotateEnabled={false}
              initialRegion={{
                latitude: -7.17716,
                longitude: -38.7815,
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
                  latitude: -7.17716,
                  longitude: -38.7815,
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
    backgroundColor: '#A9A9A9'
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

})