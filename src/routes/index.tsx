import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Intro from '../screens/Intro';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
