import { Permission } from '../types/auth';

export const PermissionService = {
  checkPermission(userPermissions: Permission[], requiredPermission: string): boolean {
    return userPermissions.some(
      (permission) => permission.name === requiredPermission || 
      permission.actions.includes(requiredPermission)
    );
  },
}; 