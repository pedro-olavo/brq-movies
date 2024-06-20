
import * as S from './HeaderTitle.styles'

import { Typography } from '@components';

export const HeaderTitle: React.FC = () => {
  return (
    <S.HeaderTitleContainer>
      <Typography variant='title-02'>
        BRQ Movies
      </Typography>
    </S.HeaderTitleContainer>
  );
}

