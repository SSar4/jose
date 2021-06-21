import * as React from 'react';
import{StyleSheet} from 'react-native'
import { Appbar,Colors } from 'react-native-paper';

const MyComponent = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.headers}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Meu perfil"  />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  headers:{
    backgroundColor:Colors.green400
  }
})

export default MyComponent;