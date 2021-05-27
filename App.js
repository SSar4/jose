import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Usuario from '../jose/scr/contexto/usuario'

import {Routes} from './scr/routes/steack/index'



export default function App(){
  
  return (
    <Usuario>
    <NavigationContainer>
        <Routes/>
    </NavigationContainer>
    </Usuario>
  )
}