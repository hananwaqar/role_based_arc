import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AdminHomeScreen, NewsListScreen, SettingScreen } from '@src/screens';
import { TabScreen, AdminTabParamList } from '../appNavigation.type';

const Tab = createBottomTabNavigator<AdminTabParamList>();

export const AdminTabs = () => {
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
        component={AdminHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.USERS}
        component={NewsListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-group" size={size} color={color} />
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
        name={TabScreen.SETTINGS}
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}; 