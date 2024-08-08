import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Pantalla1 } from './src/screens/Pantalla1'

export const App = () => {
  return (
    <NavigationContainer>
      <Pantalla1/>
    </NavigationContainer>
  )
}

export default App;
