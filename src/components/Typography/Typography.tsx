import { ColorsNameTheme, FontFamilyNamesTheme, FontsNameTheme } from '@theme/types';
import React from 'react';
import { TextProps } from 'react-native';

import * as S from './Typography.styles'


export interface ITypographyProps extends TextProps {
  variant?: FontsNameTheme
  color?: ColorsNameTheme | String
  weight?: FontFamilyNamesTheme
  align?: 'left' | 'center' | 'right'
}


export const Typography: React.FC<ITypographyProps> = ({ children, ...props }) => {
  return (
    <S.Typography {...props}>
      {children}
    </S.Typography>
  );
}

