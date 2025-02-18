export type UserRole = 'user' | 'admin' | 'manager';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  permissions: Permission[];
  tokenExpiry: number;
}

export interface Permission {
  id: string;
  name: string;
  actions: string[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
} 