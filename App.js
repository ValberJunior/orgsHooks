import React from 'react'
import { Home } from './src/screens'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

const App = () => {
  return <SafeAreaView style={styles.container}>
    <StatusBar/>
    <Home/>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;