import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import { IconComponent } from '@src/components/IconComponent';
import { Icons } from '@src/assets';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const onSubmit = data => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.subtitle}>Paloma Beauty World</Text>
      <Text style={styles.description}>Create Account</Text>

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <Icon name="account-outline" size={24} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <Icon name="email-outline" size={24} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" size={24} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <Icon name="lock-outline" size={24} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
      />

      <View style={styles.termsContainer}>
        <CheckBox
          value={agreeToTerms}
          onValueChange={setAgreeToTerms}
          tintColors={{ true: '#E84B8A', false: '#666' }}
          style={styles.checkbox}
        />
        <Text style={styles.termsText}>
          Agree with <Text style={styles.termsLink}>Terms</Text> and <Text style={styles.termsLink}>Services</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <IconComponent icon={Icons.google} />
          {/* <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <IconComponent icon={Icons.facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <IconComponent icon={Icons.google} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLink}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 56,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  termsText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  termsLink: {
    color: '#333',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#E84B8A',
    borderRadius: 30,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 24,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
  signInLink: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
