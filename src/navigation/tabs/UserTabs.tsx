import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { HomeScreen, NewsListScreen, SettingScreen } from '@src/screens';
import { TabScreen, UserTabParamList } from '../appNavigation.type';
import { IconComponent } from '@src/components/IconComponent';
import { Icons } from '@src/assets';
import SalonDetailScreen from '@src/screens/salon/SalonDetailScreen';
import AppointmentScreen from '@src/screens/salon/SalonAppointment';
import CheckoutScreen from '@src/screens/salon/CheckoutScreen';
import AppointmentsScreen from '@src/screens/appointments/AppointmentsScreen';
import BookingDetailsScreen from '@src/screens/appointments/BookingDetailsScreen';
import FeedbackScreen from '@src/screens/feedback/FeedbackScreen';
import SavedBookingsScreen from '@src/screens/bookings/SavedBookingsScreen';
import ProfileScreen from '@src/screens/profile/ProfileScreen';
import SettingsScreen from '@src/screens/settings/SettingsScreen';
import NotificationsScreen from '@src/screens/settings/NotificationsScreen';
import AboutUsScreen from '@src/screens/settings/AboutUsScreen';
import PaymentMethodsScreen from '@src/screens/settings/PaymentMethodsScreen';
import PrivacyPolicyScreen from '@src/screens/settings/PrivacyPolicyScreen';
 import HomeScreenTwo from '../../../ecommerce/screens/HomeScreen';
import DetailsScreen from '../../../ecommerce/screens/DetailsSceen';
import ShipmentAddressScreen from '../../../ecommerce/screens/ShippingAddress';
import CartScreen from '../../../ecommerce/screens/CartScreen';
import { HomeScreen } from '@src/screens';
const Tab = createBottomTabNavigator<UserTabParamList>();
const HomeStack = createNativeStackNavigator();
const NewsStack = createNativeStackNavigator();
const SavedStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="HomeMain" component={HomeScreen} />
    <HomeStack.Screen name="SaloonBook" component={SalonDetailScreen} />
    <HomeStack.Screen name="Appointment" component={AppointmentScreen} />
    <HomeStack.Screen name="Checkout" component={CheckoutScreen} />
    
  </HomeStack.Navigator>
);

const CalendarStackScreen = () => (
  <NewsStack.Navigator screenOptions={{ headerShown: false }}>
    <NewsStack.Screen name="NewsMain" component={AppointmentsScreen} />
    <NewsStack.Screen name="BookingDetail" component={BookingDetailsScreen} />
    <NewsStack.Screen name="Feedback" component={FeedbackScreen} />
  </NewsStack.Navigator>
);

const SavedStackScreen = () => (
  <SavedStack.Navigator screenOptions={{ headerShown: false }}>
   <SavedStack.Screen name="SavedMain" component={SavedBookingsScreen} />
  </SavedStack.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
  </ProfileStack.Navigator>
);
const SettingStackScreen = () => (
  <SettingStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingStack.Screen name="SettingMain" component={SettingsScreen} />
    <SettingStack.Screen name="Notification" component={NotificationsScreen} />
    <SettingStack.Screen name="About" component={AboutUsScreen} />
    <SettingStack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
    <SettingStack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    <SettingStack.Screen name="StoreHome" component={HomeScreenTwo} />
        <SettingStack.Screen name="StoreDetails" component={DetailsScreen} />
        <SettingStack.Screen name="StoreShipmentAddress" component={ShipmentAddressScreen} />
        <SettingStack.Screen name="StoreCart" component={CartScreen} />
  </SettingStack.Navigator>
);

export const UserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={TabScreen.HOME}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => <IconComponent icon={Icons.home} />,
        }}
      />
      <Tab.Screen
        name={TabScreen.CALENDAR}
        component={CalendarStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconComponent icon={Icons.calendar} />
          ),
        }}
      />
      <Tab.Screen
        name={TabScreen.LOVE}
        component={SavedStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => <IconComponent icon={Icons.love} />,
        }}
      />
      <Tab.Screen
        name={TabScreen.USER}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => <IconComponent icon={Icons.user} />,
        }}
      />
      <Tab.Screen
        name={TabScreen.SETTING}
        component={SettingStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconComponent icon={Icons.setting} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
