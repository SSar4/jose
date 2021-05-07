// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../pages/login'
import Cadastro from '../../pages/cadastro'
import Home from '../../pages/home'
import RecuperarSenha from '../../pages/recuperarSenha'
import Event from '../../pages/evento'
const Stack = createStackNavigator();

export function Routes() {

  return (
      <Stack.Navigator>
        <Stack.Screen name="Event" component={Event} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{
          headerTitle:'Voltar'
        }} />
      </Stack.Navigator>
  );
}
