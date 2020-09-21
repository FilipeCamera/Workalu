import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Cadastrar from './screens/Cadastrar';
import Servicos from './screens/Servicos';
import Vagas from './screens/Vagas';
import Sac from './screens/Sac';

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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Servicos"
          component={Servicos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Vagas"
          component={Vagas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sac"
          component={Sac}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
