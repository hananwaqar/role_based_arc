import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewsResult } from '@src/services';

export enum Screen {
  FORCE_UPDATE_SCREEN = 'FORCE_UPDATE_SCREEN',
  NETWORK_CHECK = 'NETWORK_CHECK',
  NEWS_DETAIL = 'NEWS_DETAIL',
  NEWS_LIST = 'NEWS_LIST',
  SETTING = 'SETTING',
  LOGIN = 'SignIn',
  SIGNUP = 'SignUp',
  SELECTION = 'Selection',
  USER_HOME = 'UserHome',
  MANAGER_HOME = 'ManagerHome',
  ADMIN_HOME = 'AdminHome',
}

export type NavStackParams = {
  [Screen.FORCE_UPDATE_SCREEN]: undefined;
  [Screen.NETWORK_CHECK]: undefined;
  [Screen.NEWS_DETAIL]: NewsDetailParams;
  [Screen.NEWS_LIST]: undefined;
  [Screen.SETTING]: undefined;
  [Screen.LOGIN]: undefined;
  [Screen.SIGNUP]: undefined;
  [Screen.USER_HOME]: undefined;
  [Screen.MANAGER_HOME]: undefined;
  [Screen.ADMIN_HOME]: undefined;
};

export type NewsDetailParams = {
  item: NewsResult;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;

export type NewsDetailRoute = RouteProp<NavStackParams, Screen.NEWS_DETAIL>;

export enum TabScreen {
  HOME = 'Home',
  CALENDAR = 'Calendar',
  LOVE = 'Love',
  USER = 'User',
  SETTING = 'Setting',
  NEWS = 'News',
  SETTINGS = 'Settings',
  USERS = 'Users',
  ANALYTICS = 'Analytics',
  PROFILE = 'Profile',
}

export type UserTabParamList = {
  [TabScreen.HOME]: undefined;
  [TabScreen.NEWS]: undefined;
  [TabScreen.PROFILE]: undefined;
};

export type ManagerTabParamList = {
  [TabScreen.HOME]: undefined;
  [TabScreen.NEWS]: undefined;
  [TabScreen.ANALYTICS]: undefined;
  [TabScreen.SETTINGS]: undefined;
};

export type AdminTabParamList = {
  [TabScreen.HOME]: undefined;
  [TabScreen.USERS]: undefined;
  [TabScreen.NEWS]: undefined;
  [TabScreen.SETTINGS]: undefined;
};
