import { ArrowLeft, Heart } from 'lucide-react-native';
import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['neutral-01']};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space['spacing-16']};
  gap: ${({ theme }) => theme.space['spacing-16']};
`;

export const BackButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors['neutral-01']};
  padding: ${({ theme }) => theme.space['spacing-08']};
  border-radius: ${({ theme }) => theme.radii['corner-48']};
  margin-left: ${({ theme }) => theme.space['spacing-16']};
`;

export const BackIcon = styled(ArrowLeft)``;

export const LikeButton = styled.TouchableOpacity<{ liked: boolean }>`
  background-color: ${({ theme, liked }) =>
    liked ? theme.colors['primary-01'] : theme.colors['grayScale-04']};
  padding: ${({ theme }) => theme.space['spacing-08']};
  border-radius: ${({ theme }) => theme.radii['corner-48']};
  margin-right: ${({ theme }) => theme.space['spacing-16']};
`;

export const LikeIcon = styled(Heart)``;

export const GeneralInfo = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Poster = styled.Image`
  width: 100%;
  aspect-ratio: 2/3;
`;
