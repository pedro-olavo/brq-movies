export interface User {
  name: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
