import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface SettingsSwitchItem {
  title: string;
  value: boolean;
}

interface SettingsLinkItem {
  title: string;
  onPress: () => void;
}

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState({
    push: false,
    app: false,
    appointments: false,
  });

  const renderSwitchItem = ({ title, value }: SettingsSwitchItem) => (
    <View style={styles.settingItem}>
      <Text style={styles.settingText}>{title}</Text>
      <Switch
        value={value}
        onValueChange={(newValue) => 
          setNotifications(prev => ({
            ...prev,
            [title.toLowerCase().split(' ')[0]]: newValue
          }))
        }
        trackColor={{ false: '#E0E0E0', true: '#E84B8A' }}
        thumbColor={'#FFFFFF'}
      />
    </View>
  );

  const renderLinkItem = ({ title, onPress }: SettingsLinkItem) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <Text style={styles.settingText}>{title}</Text>
      <Icon name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/images/profile-pic.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Farion Wick</Text>
            <Text style={styles.profileEmail}>farionwick@gmail.com</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Store</Text>
          {renderLinkItem({
            title: 'Buy Products',
            onPress: () => navigation.navigate('StoreHome'),
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          {renderSwitchItem({
            title: 'Push Notifications',
            value: notifications.push,
          })}
          {renderSwitchItem({
            title: 'App Notifications',
            value: notifications.app,
          })}
          {renderSwitchItem({
            title: 'Appointment Updates',
            value: notifications.appointments,
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          {renderLinkItem({
            title: 'Notification',
            onPress: () => navigation.navigate('Notification'),
          })}
          {renderLinkItem({
            title: 'About Paloma Beauty World',
            onPress: () => navigation.navigate('About'),
          })}
          {renderLinkItem({
            title: 'Payment Methods',
            onPress: () => navigation.navigate('PaymentMethods'),
          })}
          {renderLinkItem({
            title: 'Privacy Policy',
            onPress: () => navigation.navigate('PrivacyPolicy'),
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },
  profileEmail: {
    color: '#666',
    marginTop: 4,
  },
  section: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingText: {
    fontSize: 16,
    color: '#666',
  },
});

export default SettingsScreen; 