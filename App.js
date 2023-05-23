import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Classification } from './src/pages/Classification';
import { Team } from './src/pages/Team';

import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="classification" component={Classification} />
        <Stack.Screen name="team" component={Team} />
      </Stack.Navigator>
    </NavigationContainer>
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
