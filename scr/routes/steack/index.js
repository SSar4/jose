// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from 'react-native-paper'
import Login from '../../pages/login'
import Cadastro from '../../pages/cadastro'
import Home from '../../pages/home'
import RecuperarSenha from '../../pages/recuperarSenha'
import Event from '../../pages/evento'
import Perfil from '../../pages/perfil'
import {useUsuario} from '../../contexto/usuario'

const Stack = createStackNavigator();

export function Routes() {
  const {usuario} = useUsuario()
  return (
      <Stack.Navigator>
        {
          usuario ?
          <>
          <Stack.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Event" component={Event} options={{headerShown:false}}/>
          </>
          :
          <>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        
          <Stack.Screen name="Event" component={Event} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{
          headerStyle:{
            backgroundColor:Colors.green400,
          },headerTintColor:'white'
          }}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{
          headerStyle:{
            backgroundColor:Colors.green400,
          },headerTintColor:'white'
          }}/>
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{
          headerTitle:'Voltar',
          headerStyle:{
            backgroundColor:Colors.green400,
          },headerTintColor:'white'
          }} />
          </>
        }
      </Stack.Navigator>
  );
}
