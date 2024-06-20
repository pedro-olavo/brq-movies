import Popover from 'react-native-popover-view';
import useAuth from '@hooks/useAuth';

import { Typography } from '@components';

import * as S from './Logout.styles'

export const Logout: React.FC = () => {
  const { logout } = useAuth()

  return (
    <Popover
      arrowSize={{ width: 0, height: 0 }}
      from={(
        <S.Menu testID='MENU-BTN'>
          <S.MenuIcon />
        </S.Menu>
      )}
    >
      <S.MenuContent>
        <S.MenuItem testID="LOGOUT-BTN" onPress={() => logout()}>
          <S.LogoutIcon />
          <Typography color="grayScale-09">Sair</Typography>
        </S.MenuItem>
      </S.MenuContent>
    </Popover>
  );
}
