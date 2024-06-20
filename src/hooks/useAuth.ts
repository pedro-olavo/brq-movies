import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '@stores/slices/auth';
import { User } from '@stores/slices/types';
import { RootState } from '@stores/store';

const useAuth = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogin = (userData: User) => {
    dispatch(login({ user: userData }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    isAuthenticated,
    user,
    login: handleLogin,
    logout: handleLogout,
  };
};

export default useAuth;
