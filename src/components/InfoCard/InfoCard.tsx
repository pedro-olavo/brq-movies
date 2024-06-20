import React from 'react';
import { View } from 'react-native';

import * as S from './InfoCard.styles'
import { Typography } from '@components';
import { LucideIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

interface IInfoCardProps {
  Icon: LucideIcon
  label: string
  info: string | number
}

export const InfoCard: React.FC<IInfoCardProps> = ({ Icon, label, info }) => {

  const theme = useTheme()

  return (
    <S.Container>
      <S.TitleContainer>
        <S.IconContainer>
          <Icon color={theme.colors['primary-01']} size={theme.iconSizes['iconBody-01']} />
        </S.IconContainer>

        <Typography variant='caption-01' color='primary-01' weight='bold'>{label}</Typography>
      </S.TitleContainer>

      <Typography variant='title-03' weight='bold'>{info || '-'}</Typography>
    </S.Container>
  );
}

