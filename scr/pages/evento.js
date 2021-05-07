import * as React from 'react';
import { Appbar,Card,Colors, Headline, Button } from 'react-native-paper';
import { StatusBar, StyleSheet, View,Text, ScrollView, Dimensions } from 'react-native'
import {format,parseISO, formatRelative, subDays,formatDistance} from 'date-fns'
import { pt, ptBR } from 'date-fns/locale'
import MapView from 'react-native-maps';

export default function App({navigation}) {
    
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={Colors.grey600}></StatusBar>
        <Appbar.Header style={styles.header}>
            <Appbar.BackAction onPress={_goBack} color='white'/>
            <Appbar.Content title=" " subtitle=" " color='white'/>
            <Appbar.Action icon="menu" onPress={_handleMore} color='white' />
            <Appbar.Action icon="magnify" onPress={_handleSearch} color='white'/>
        </Appbar.Header>
        <ScrollView>
        <Headline style={styles.titulo}>Titulo</Headline>
        <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
         <Card.Actions>
            <Button color='#00aaff'>Credenciar-se</Button>
          </Card.Actions>
          <Card.Actions>
            <Button color='#b5b5b5'>Inicio {format(new Date(),"dd'/'MM'/'yy'",{locale:pt})}</Button>
          </Card.Actions>
          <Card.Actions>
            <Button color='#b5b5b5'>Termino: {format(new Date(),"dd'/'MM'/'yy'",{locale:pt})}</Button>
          </Card.Actions>
          <Text style={[styles.text,{textAlign:'justify'}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
          <View style={styles.containermap}>
            <MapView 
            
            rotateEnabled={false}
            initialRegion={{
                latitude:-7.17716, 
                longitude:-38.7815,
                latitudeDelta:0.0143,
                longitudeDelta:0.0124
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
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        backgroundColor:'#A9A9A9'
    },
    titulo:{
        textAlign:'center',
        color:'#00aaff'
    },
    card:{
        width:'85%',
        alignSelf:'center',
        marginTop:10,
        elevation:0
    },
    text:{
        width:'70%',
        alignSelf:'flex-end',
        marginRight:15,
        letterSpacing:0.6,
        lineHeight:22,
        marginBottom:20
    },
    containermap: {
        width:'100%',
        marginBottom:50,
        height:200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: '100%',
        height: '100%',
      },
    
})