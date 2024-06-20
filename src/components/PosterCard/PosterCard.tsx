
import { TouchableOpacityProps } from 'react-native';

import * as S from './PosterCard.styles'

interface IPosterCard extends TouchableOpacityProps {
  poster_path: string
}

export const PosterCard: React.FC<IPosterCard> = ({ poster_path, ...props }) => {
  return (
    <S.Container {...props}>
      <S.Poster source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} />
    </S.Container>
  );
}


