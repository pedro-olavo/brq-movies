import { useCallback, useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { MoviesStackParams, Screens } from '@routes/types';
import { InfoCard, Typography } from '@components';
import { useTheme } from 'styled-components/native';
import { NativeScrollEvent, NativeSyntheticEvent, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Calendar, Heart, Star, Vote } from 'lucide-react-native';
import { formatDate } from '@helper/formatDate'
import useFavoriteMovies from '@hooks/useFavoriteMovie';
import * as S from './MovieDetails.styles';

interface IMovieDetailsProps {
  navigation: StackNavigationProp<MoviesStackParams, Screens.MovieDetails>;
  route: RouteProp<MoviesStackParams, Screens.MovieDetails>
}

export const MovieDetails: React.FC<IMovieDetailsProps> = ({ navigation, route }) => {
  const theme = useTheme()

  const {
    id,
    title,
    overview,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    release_date
  } = route.params;

  const { addFavorite, removeFavorite, isMovieFavorite } = useFavoriteMovies(id)

  const [headerTransparent, setHeaderTransparent] = useState(true);

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 50;

    if (offsetY > threshold) {
      setHeaderTransparent(false);
    } else {
      setHeaderTransparent(true);
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: theme.colors['tertiary-01'] },
      headerTransparent,
      headerTitleContainerStyle: { width: '100%', alignItems: 'center' },
      headerTitle: () => <Typography variant='title-02'>{!headerTransparent ? title : ''}</Typography>,
      headerLeft: () => (
        <S.BackButton onPress={() => navigation.goBack()} testID='BACK-BTN'>
          <S.BackIcon color={headerTransparent ? theme.colors['grayScale-01'] : theme.colors['primary-01']} />
        </S.BackButton>
      ),
      headerRight: () => (
        <S.LikeButton
          liked={isMovieFavorite as boolean}
          onPress={() => {
            isMovieFavorite ? removeFavorite(id) : addFavorite(route.params)
          }}
          testID='TOGGLE-FAVORITE-MOVIE-BTN'
        >
          <S.LikeIcon fill={theme.colors['grayScale-09']} />
        </S.LikeButton>
      ),
    })
  }, [navigation, headerTransparent, id, isMovieFavorite, removeFavorite, addFavorite])

  return (
    <S.Container onScroll={handleScroll}>
      <StatusBar backgroundColor={theme.colors['tertiary-01']} />

      <S.Poster source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} />

      <S.Content>
        <Typography variant='title-01' weight='bold'>{title}</Typography>
        <Typography variant='caption-01' weight='bold' color='primary-01'>SINOPSE</Typography>
        <Typography variant='body-01'>{overview}</Typography>

        <S.GeneralInfo>
          <InfoCard Icon={Heart} label='Nota' info={vote_average.toFixed(1)} />
          <InfoCard Icon={Vote} label='Qtd. Notas' info={vote_count} />
          <InfoCard Icon={Star} label='Popularidade' info={popularity.toFixed(0)} />
          <InfoCard Icon={Calendar} label='Lançamento' info={formatDate(release_date)} />
        </S.GeneralInfo>
      </S.Content>

    </S.Container>
  );
}
