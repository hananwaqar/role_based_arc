import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


interface ProfileFormData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  age: string;
  gender: string;
}

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      name: 'Farion Wick',
      email: 'farionwick@gmail.com',
      phoneNumber: '',
      address: '',
      age: '',
      gender: '',
    }
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    // Handle profile update logic here
  };

  const renderInput = (
    name: keyof ProfileFormData,
    placeholder: string,
    rules = {},
    keyboardType: any = 'default'
  ) => (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              errors[name] && styles.inputError
            ]}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            keyboardType={keyboardType}
          />
          {errors[name] && (
            <Text style={styles.errorText}>
              {errors[name]?.message}
            </Text>
          )}
        </View>
      )}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <Image
            source={require('../../assets/images/profile-pic.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Farion Wick</Text>
            <Text style={styles.profileEmail}>farionwick@gmail.com</Text>
          </View>
        </View>

        {renderInput('name', 'Name', {
          required: 'Name is required'
        })}
        
        {renderInput('email', 'Email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        }, 'email-address')}
        
        {renderInput('phoneNumber', 'Phone Number', {
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Invalid phone number'
          }
        }, 'phone-pad')}
        
        {renderInput('address', 'Address')}
        
        {renderInput('age', 'Age', {
          pattern: {
            value: /^[0-9]{1,2}$/,
            message: 'Invalid age'
          }
        }, 'numeric')}
        
        {renderInput('gender', 'Gender')}

        <TouchableOpacity
          style={styles.updateButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
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
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: 'white',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12,
  },
  updateButton: {
    backgroundColor: '#E84B8A',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  tabItem: {
    padding: 10,
  },
});

export default ProfileScreen; 