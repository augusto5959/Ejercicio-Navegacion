import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1 } from '../src/screens/Pantalla1';
import { Pantalla2 } from '../src/screens/Pantalla2';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pantalla1" component={Pantalla1} />
      <Stack.Screen name="Pantalla2" component={Pantalla2} />
    </Stack.Navigator>
  );
}