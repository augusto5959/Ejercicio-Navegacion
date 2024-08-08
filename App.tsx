import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Pantalla1 } from './src/screens/Pantalla1'
import { StackNavigator } from './navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;
