import styled from 'styled-components/native';

export const Container = styled.View`
  width: 48%;
  background-color: ${({ theme }) => theme.colors['tertiary-01']};
  gap: ${({ theme }) => theme.space['spacing-08']};
  padding: ${({ theme }) => theme.space['spacing-08']};
  border-radius: ${({ theme }) => theme.radii['corner-08']};
  margin-bottom: ${({ theme }) => theme.space['spacing-16']};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.space['spacing-08']};
`;
export const IconContainer = styled.View`
  padding: ${({ theme }) => theme.space['spacing-08']};
  background-color: ${({ theme }) => theme.colors['neutral-01']};
  border-radius: ${({ theme }) => theme.radii['corner-48']};
`;
