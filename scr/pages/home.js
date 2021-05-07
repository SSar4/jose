import * as React from 'react';
import { Appbar,Colors,Searchbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FlatList, StyleSheet, Text, View,Dimensions, Image, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {format,parseISO, formatRelative, subDays,formatDistance} from 'date-fns'
import { pt, ptBR } from 'date-fns/locale'

const MyComponent = () => {

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const {width} = Dimensions.get('window');
  const numberGrid = 1;
  const itemWidth = width / numberGrid;

 let matriz = [
     {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGB1dgmgNGGcxScuv3IS6_MwC3QX_yPfC0WsN4hJBpGF2_Cvj-Z2ZUt0X4JpxP5rYmpw&usqp=CAU',
      tipoEv:'Evento Online',
      titulo:'VII Jornada de Eventos',
      data:new Date()
    },
     {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGB1dgmgNGGcxScuv3IS6_MwC3QX_yPfC0WsN4hJBpGF2_Cvj-Z2ZUt0X4JpxP5rYmpw&usqp=CAU',
     tipoEv:'Evento Online',
     titulo:'VII Jornada de Eventos',
     data:new Date()
    },
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGB1dgmgNGGcxScuv3IS6_MwC3QX_yPfC0WsN4hJBpGF2_Cvj-Z2ZUt0X4JpxP5rYmpw&usqp=CAU',
    tipoEv:'Evento Online',
    titulo:'VII Jornada de Eventos',
    data:new Date()
   },
   {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGB1dgmgNGGcxScuv3IS6_MwC3QX_yPfC0WsN4hJBpGF2_Cvj-Z2ZUt0X4JpxP5rYmpw&usqp=CAU',
    tipoEv:'Evento Online',
    titulo:'VII Jornada de Eventos',
    data:new Date()
   }
 ]

  return (
    <View style={{flex:1,marginBottom:20}}>
        <Appbar.Header style={styles.header}>
            <Appbar.Content 
            titleStyle={{color:'white'}}
            title="EventService"/>
            <Appbar.Action color='white' icon="calendar" onPress={_handleSearch} />
            <Appbar.Action color='white' icon="login" onPress={_handleMore} />
        </Appbar.Header>

        <Searchbar
        style={styles.search}
        placeholder="Titulo descrição ou data"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
        <ScrollView>
           {
               matriz.map((item,index)=>{
                   return(
                    <Card key={index} style={{width:'90%',alignSelf:'center',marginBottom:10}}>
                    <Image style={{
                        width:'100%',
                        height:100
                    }} source={{uri:item.img}}></Image>
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
                        title={item.tipoEv}/>
                  </Card>
                  <Card.Content>
                  <Title>{item.titulo}</Title>
                  <Card.Actions>
                  <FontAwesome name="calendar" size={18} color={Colors.green300} />
                  <Paragraph style={{marginLeft:10}}>{format(item.data,"dd 'de' MMMM', ' yyyy",{locale:pt})}</Paragraph>
                  </Card.Actions>
                  
                </Card.Content>
                  </Card>
                   )
               })
           }
        </ScrollView>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
    header:{
        backgroundColor:Colors.green400
    },
    search:{
        width:'90%',
        marginTop:20,
        marginBottom:20,
        alignSelf:'center'
    },
    cardTipoEvent:{
        width:100,
        marginTop:10,
        marginLeft:30,
        padding:0,
        backgroundColor:Colors.green300
    }
})