import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login'
import {connect, Provider} from 'react-redux'
import store from './redux/store'

export default function App() {
  return (
    
    <Provider store={store} >
      <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


