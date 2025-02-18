import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthenticated, setUserRole, setUser } from '@src/store';
import { loginAPI } from '@src/services/api/auth';

export const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    setLoading(true);
    try {
      const response = await loginAPI({ username, password });
      
      dispatch(setUser({
        id: response.user.id,
        username: response.user.username,
        email: response.user.email,
      }));
      dispatch(setUserRole(response.user.role));
      dispatch(setAuthenticated(true));
      
    } catch (error) {
      Alert.alert(
        'Login Failed',
        'Invalid credentials. Try:\nadmin/admin123\nmanager/manager123\nuser/user123'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUsernameChange = (text: string) => {
    console.log('Username changing:', text);
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    console.log('Password changing:', text);
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
        autoCapitalize="none"
        editable={!loading}
        testID="username-input"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
        editable={!loading}
        testID="password-input"
      />
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      
      <Text style={styles.hint}>
        Demo Credentials:{'\n'}
        admin/admin123{'\n'}
        manager/manager123{'\n'}
        user/user123
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
    height: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#007AFF80',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  hint: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
  },
}); 