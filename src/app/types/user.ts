export interface Login {
  userName: string;
  password: string;
  remember: boolean;
}

export interface User {
  firstName: string;
  fullName: string;
  gender: string;
  language: string;
  middleName: string;
  mobileNo: string;
  phone: string;
  avatarUrl: string;
  birthDate: string;
  roleProfileName: string;
}

export interface UserAccount {
  userId: string;
  userRole: string;
  username: string;
  youtube: string;
  email: string;
  twitter: string;
  lastActive: string;
  lastLogin: string;
}

export interface userAdditional {
  lastPasswordResetDate: string;
  logoutAllSessions: boolean;
  muteSounds: boolean;
  newPassword: string;
  notificationIds: any;
  password: string;
  resetPasswordKey: string;
  sendWelcomeEmail: false;
  simultaneousSessions: false;
  status: string;
  unsubscribed: boolean;
  zipCode: string;
  about: string;
}

export interface UserAddress {
  address1: string;
  address2: string;
  city: string;
  country: string;
  location: string;
  state: string;
  timeZone: string;
}

export interface IProfile
  extends User,
    UserAddress,
    userAdditional,
    UserAccount {}
