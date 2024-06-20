import useAuth from '@hooks/useAuth';
import { useCallback, useReducer, useState } from 'react';

export const useSignIn = () => {
  const { login } = useAuth();

  const [user, setUser] = useReducer((_: string, value: string) => value, '');
  const [password, setPassword] = useReducer(
    (_: string, value: string) => value,
    '',
  );
  const [error, setError] = useState<string | null>(null);

  const validateUserAndPassword = useCallback(() => {
    if (user === '' || password === '') {
      setError('Todos os campos são obrigatórios.');
      return false;
    }

    if (!/^\d+$/.test(password)) {
      setError('A senha deve ser numérica.');
      return false;
    }

    return true;
  }, [user, password]);

  const handleLogin = useCallback(() => {
    if (!validateUserAndPassword()) {
      return false;
    }

    if (user === 'user' && password === '123') {
      login({ name: user });
      setError(null);
    } else {
      return setError('Combinação de login/senha inválida.');
    }
  }, [user, password, validateUserAndPassword]);

  return {
    user,
    setUser,
    password,
    setPassword,
    error,
    handleLogin,
  };
};
