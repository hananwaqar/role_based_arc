import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnalyticsScreen } from '@src/screens';
import { AnalyticsStackParamList } from '../appNavigation.type';

const Stack = createNativeStackNavigator<AnalyticsStackParamList>();

export const AnalyticsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Analytics" component={AnalyticsScreen} />
    </Stack.Navigator>
  );
}; 