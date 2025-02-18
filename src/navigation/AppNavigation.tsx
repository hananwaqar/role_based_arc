import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import {
  LoginScreen,
  NetworkLoggerScreen,
  NewsListScreen,
} from '@src/screens';
import { isForceUpdate, selectUserRole, selectIsAuthenticated } from '@src/store';

import { NavStackParams, Screen } from './appNavigation.type';
import { ForUpdateStack } from './ForceupdateStack';
import { AdminTabs } from './tabs/AdminTabs';
import { ManagerTabs } from './tabs/ManagerTabs';
import { UserTabs } from './tabs/UserTabs';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const AuthStack = createNativeStackNavigator<NavStackParams>();
const UserStack = createNativeStackNavigator<NavStackParams>();
const ManagerStack = createNativeStackNavigator<NavStackParams>();
const AdminStack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={screenOptions}>
    <AuthStack.Screen name={Screen.LOGIN} component={LoginScreen} />
  </AuthStack.Navigator>
);

const UserNavigator = () => (
  <UserStack.Navigator screenOptions={screenOptions}>
    <UserStack.Screen name={Screen.USER_HOME} component={UserTabs} />
    <UserStack.Screen name={Screen.NEWS_DETAIL} component={NewsListScreen} />
  </UserStack.Navigator>
);

const ManagerNavigator = () => (
  <ManagerStack.Navigator screenOptions={screenOptions}>
    <ManagerStack.Screen name={Screen.MANAGER_HOME} component={ManagerTabs} />
    <ManagerStack.Screen name={Screen.NEWS_DETAIL} component={NewsListScreen} />
  </ManagerStack.Navigator>
);

const AdminNavigator = () => (
  <AdminStack.Navigator screenOptions={screenOptions}>
    <AdminStack.Screen name={Screen.ADMIN_HOME} component={AdminTabs} />
    <AdminStack.Screen name={Screen.NEWS_DETAIL} component={NewsListScreen} />
    {__DEV__ && (
      <AdminStack.Screen name={Screen.NETWORK_CHECK} component={NetworkLoggerScreen} />
    )}
  </AdminStack.Navigator>
);

export const AppNavigation = () => {
  const isForceUpdateApp = useSelector(isForceUpdate);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userRole = useSelector(selectUserRole);

  if (isForceUpdateApp) {
    return <ForUpdateStack />;
  }

  if (!isAuthenticated) {
    return <AuthNavigator />;
  }
  
  switch (userRole) {
    case 'admin':
      return <AdminNavigator />;
    case 'manager':
      return <ManagerNavigator />;
    case 'user':
    default:
      return <UserNavigator />;
  }
};
