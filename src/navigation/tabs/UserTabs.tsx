import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserHomeScreen, NewsListScreen, SettingScreen } from '@src/screens';
import { TabScreen, UserTabParamList } from '../appNavigation.type';

const Tab = createBottomTabNavigator<UserTabParamList>();

export const UserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name={TabScreen.HOME}
        component={UserHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.NEWS}
        component={NewsListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.PROFILE}
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}; 