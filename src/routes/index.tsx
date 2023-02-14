import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Intro from '../screens/Intro';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Info from '../screens/Info';
import TabsRoutes from './tabsRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="signIn">
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="info" component={Info} />
        <Stack.Screen name="home" component={TabsRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
