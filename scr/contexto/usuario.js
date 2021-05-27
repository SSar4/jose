import React, {useState, createContext, useContext,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const UsuarioContext = createContext()

export default function CarrinhoProvider({children}){


    const [usuario,setUsuario] = useState()

      useEffect(() => {
        (async () => {
            const aux = await AsyncStorage.getItem("@usuario")
            if(aux){
                const parse = JSON.parse(aux)
                setUsuario(parse)
            }
           
        })();
      },[]);

      const store = {usuario}
     
      return(
          <UsuarioContext.Provider value={store}>
              {children}
          </UsuarioContext.Provider>
      )
}

//PROPRIO HOOCK
export function useUsuario() {
    const contextusuario = useContext(UsuarioContext)
    const {usuario} = contextusuario
    return {usuario}
}