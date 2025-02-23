import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ManagerHomeScreen } from '@src/screens';
import { HomeStackParamList } from '../appNavigation.type';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ManagerHome" component={ManagerHomeScreen} />
    </Stack.Navigator>
  );
}; 