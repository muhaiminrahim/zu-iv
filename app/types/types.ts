export type userData = {
  avatar: string;
  email: string;
  first_name: string;
  id: Number;
  last_name: string;
};

export type InitialState = {
  value: AuthState;
};

export type AuthState = {
  email: string;
  uid: string;
  isAuth: boolean;
};

export type LogInPayload = {
  email: string;
  uid: string;
};
