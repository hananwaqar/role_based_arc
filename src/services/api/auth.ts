import { UserRole } from '@src/store/types/auth.types';

// Types for API
interface LoginCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    username: string;
    email: string;
    role: UserRole;
  };
  token: string;
}

// Dummy user data
const MOCK_USERS = {
  admin: {
    id: '1',
    username: 'admin',
    password: 'admin123',
    email: 'admin@example.com',
    role: 'admin' as UserRole,
  },
  manager: {
    id: '2',
    username: 'manager',
    password: 'manager123',
    email: 'manager@example.com',
    role: 'manager' as UserRole,
  },
  user: {
    id: '3',
    username: 'user',
    password: 'user123',
    email: 'user@example.com',
    role: 'user' as UserRole,
  },
};

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock login API function
export const loginAPI = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // Simulate API delay
  await delay(1000);

  // Find matching user
  const mockUser = Object.values(MOCK_USERS).find(
    user => user.username === credentials.username && user.password === credentials.password
  );

  if (!mockUser) {
    throw new Error('Invalid credentials');
  }

  // Return successful response
  return {
    user: {
      id: mockUser.id,
      username: mockUser.username,
      email: mockUser.email,
      role: mockUser.role,
    },
    token: 'dummy-jwt-token-' + mockUser.role,
  };
};

// Usage example in comments:
/*
Try these credentials:
1. Admin:
   username: "admin"
   password: "admin123"

2. Manager:
   username: "manager"
   password: "manager123"

3. User:
   username: "user"
   password: "user123"
*/ 