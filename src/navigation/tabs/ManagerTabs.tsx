import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabScreen, ManagerTabParamList } from '../appNavigation.type';
import { HomeStack } from '../stacks/HomeStack';
import { NewsStack } from '../stacks/NewsStack';
import { AnalyticsStack } from '../stacks/AnalyticsStack';
import { SettingsStack } from '../stacks/SettingsStack';
import { Icons } from '@src/assets';
import { IconComponent } from '@src/components/IconComponent';

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
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconComponent icon={Icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.NEWS}
        component={NewsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconComponent icon={Icons.calendar} />
          ),
        }}
      />
    {/*   <Tab.Screen
        name={TabScreen.ANALYTICS}
        component={AnalyticsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="chart-bar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.SETTINGS}
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}; 