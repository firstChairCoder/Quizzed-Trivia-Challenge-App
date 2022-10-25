import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Question, Result } from '@src/modules/quiz/presenter';

const Stack = createStackNavigator();

export const Routes: React.FC = () => (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
        />
      <Stack.Screen
        name='Question'
        component={Question}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Result'
        component={Result}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
)