import * as S from './TabBarLabel.styles'

import { Screens } from '@routes/types';
import { getScreenName } from '@routes/screens';
import { Typography } from '@components'


interface ITabBarLabelProps {
  routeName: Screens;
  color: string;
  focused: boolean
}

export const TabBarLabel: React.FC<ITabBarLabelProps> = ({ routeName, color, focused }) => {
  const name = getScreenName(routeName)

  return (
    <S.TabTitleContainer>
      <S.TabTitle color={color}>
        {name}
      </S.TabTitle>
    </S.TabTitleContainer>
  );
}


