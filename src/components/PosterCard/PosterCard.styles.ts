import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
`;

export const Poster = styled.Image`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii['corner-08']};
  aspect-ratio: 2/3;
`;
