import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, UserRole } from '../types/auth.types';

const initialState: AuthState = {
  isAuthenticated: false,
  userRole: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUserRole: (state, action: PayloadAction<UserRole>) => {
      state.userRole = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = null;
      state.user = null;
    },
  },
});

export const { setAuthenticated, setUserRole, setUser, logout } = authSlice.actions;
export default authSlice.reducer; 