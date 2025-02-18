import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ManagerHomeScreen, NewsListScreen, SettingScreen } from '@src/screens';
import { TabScreen, ManagerTabParamList } from '../appNavigation.type';

const Tab = createBottomTabNavigator<ManagerTabParamList>();

export const ManagerTabs = () => {
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
        component={ManagerHomeScreen}
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
        name={TabScreen.ANALYTICS}
        component={NewsListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="chart-bar" size={size} color={color} />
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