import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Follow from './src/screens/Follow';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerStyle: {backgroundColor: 'orange'}, headerTitleStyle: {color: 'white'}}}
        />
        <Stack.Screen
          name="Follow"
          component={Follow}
          options={{headerStyle: {backgroundColor: 'olive'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
