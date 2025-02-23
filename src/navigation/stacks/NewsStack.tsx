import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewsStackParamList } from '../appNavigation.type';
import BookingDetail from '@src/screens/manager/BookingDetail';
import BookingDescription from '@src/screens/manager/BookingDescription';

const Stack = createNativeStackNavigator<NewsStackParamList>();

export const NewsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ManagerBookingDetail" component={BookingDetail} />
      <Stack.Screen name="BookingDescription" component={BookingDescription} />
    </Stack.Navigator>
  );
}; 