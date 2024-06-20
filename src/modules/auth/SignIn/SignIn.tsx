import useKeyboardVisibility from '@hooks/useKeyboardVisiblity';

import { Input, Typography } from '@components'
import { Lock, User } from 'lucide-react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSignIn } from './useSignIn';

import * as S from './SignIn.styles'

export const SignIn: React.FC = () => {
  const isKeyboardVisible = useKeyboardVisibility()

  const { user, password, setUser, setPassword, error, handleLogin } = useSignIn()

  return (
    <S.Container>
      {!isKeyboardVisible && <Image source={require('@assets/images/logo.png')} />}

      <S.InputsContainer>
        <Input
          Icon={User}
          label='Usuário'
          value={user}
          onChangeText={setUser}
          error={Boolean(error)}
          testID='USER-INPUT'
        />
        <Input
          Icon={Lock}
          label='Senha'
          value={password}
          onChangeText={setPassword}
          error={Boolean(error)}
          testID='PASSWORD-INPUT'
        />

        {error && (
          <S.HelperTextContainer>
            <S.AlertIcon />
            <Typography variant='caption-01' color='error-02'>{error}</Typography>
          </S.HelperTextContainer>
        )}
      </S.InputsContainer>

      <S.LoginButton
        onPress={handleLogin}
        disabled={!user || !password}
        testID='LOGIN-BTN'
      >
        <Typography variant='title-04' weight='semiBold'>Entrar</Typography>
      </S.LoginButton>

      <TouchableOpacity>
        <Typography variant='caption-01' weight='bold'>Esqueci minha senha</Typography>
      </TouchableOpacity>
    </S.Container>
  );
}


