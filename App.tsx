import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import StackNavigator from './app/router';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './app/redux';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
      <NavigationContainer>
          <StackNavigator/>
      </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1},
});
