export const ROUTES = {
  AUTH: {
    LOGIN: 'Login',
    REGISTER: 'Register',
    FORGOT_PASSWORD: 'ForgotPassword',
  },
  USER: {
    HOME: 'UserHome',
    PROFILE: 'UserProfile',
    ORDERS: 'Orders',
    NOTIFICATIONS: 'Notifications',
  },
  ADMIN: {
    DASHBOARD: 'AdminDashboard',
    USER_MANAGEMENT: 'UserManagement',
    ANALYTICS: 'Analytics',
    SETTINGS: 'Settings',
  },
  MANAGER: {
    DASHBOARD: 'ManagerDashboard',
    TEAM: 'TeamManagement',
    REPORTS: 'Reports',
    PERFORMANCE: 'Performance',
  },
  COMMON: {
    SETTINGS: 'Settings',
    NOTIFICATIONS: 'Notifications',
    HELP: 'Help',
  },
} as const; 