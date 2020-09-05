import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Cadastrar from './screens/Cadastrar';
import Servicos from './screens/Servicos';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{
            headerTitle: 'FServices',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Cairo-Bold', color: '#416CD9' },
            headerStyle: { //elevation: 0 
            },
            headerLeft: false,
          }}
        />
        <Stack.Screen
          name="Servicos"
          component={Servicos}
          options={{
            title: 'FServices',
            headerStyle: {
              backgroundColor: '#416CD9',
              //elevation: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'Cairo-Bold', color: '#FFF' },
            headerLeft: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
