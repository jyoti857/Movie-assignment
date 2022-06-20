import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackRouter} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import Details from './src/Details';
const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
      <PaperProvider theme={customTheme}>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen 
                name="Home"
                component = {Home}
                options = {{title: 'Home'}}
              />
              <Stack.Screen
                name = "Details"
                component={ Details }
                options = {{title: 'Details'}}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignSelf: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
