import axios from 'axios';
import { User } from '../types/auth';

const API_URL = 'YOUR_API_URL';

export const AuthService = {
  async login(credentials: { email: string; password: string }) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials);
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  },

  async logout() {
    try {
      await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  async validateToken(token: string): Promise<User> {
    try {
      const response = await axios.get(`${API_URL}/auth/validate`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.user;
    } catch (error) {
      throw new Error('Invalid token');
    }
  },

  async refreshToken(): Promise<string> {
    try {
      const response = await axios.post(`${API_URL}/auth/refresh`);
      return response.data.token;
    } catch (error) {
      throw new Error('Token refresh failed');
    }
  },
}; 