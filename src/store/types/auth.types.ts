export type UserRole = 'admin' | 'manager' | 'user';

export interface AuthState {
  isAuthenticated: boolean;
  userRole: UserRole | null;
  user: {
    id: string;
    username: string;
    email: string;
  } | null;
} 