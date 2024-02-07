export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
  CUSTOMER = 'customer'
}

export const UserTypeLabel = new Map<string, string>([
  ['admin', 'Administrador'],
  ['user', 'Usuário'],
  ['customer', 'Cliente']
]);

export const UserTypeOptions = Array.from(UserTypeLabel).map(userType => ({
  id: userType[0],
  label: userType[1]
}));
