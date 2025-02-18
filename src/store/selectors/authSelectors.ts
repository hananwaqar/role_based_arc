import { RootState } from '../store';
import { UserRole } from '../types/auth.types';

export const selectIsAuthenticated = (state: RootState): boolean => 
  state.auth.isAuthenticated;

export const selectUserRole = (state: RootState): UserRole | null => 
  state.auth.userRole;

export const selectUser = (state: RootState) => state.auth.user; 