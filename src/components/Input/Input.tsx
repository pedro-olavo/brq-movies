import React, { useReducer, useState } from 'react';

import * as S from './Input.styles';

import { LucideIcon, X, AlertCircle } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';
import { TextInputProps } from 'react-native';

interface IInputProps extends TextInputProps {
  Icon: LucideIcon
  label: string;
  error: boolean;
}

export const Input: React.FC<IInputProps> = ({ Icon, value, onChangeText, error, label, ...props }) => {
  const theme = useTheme()
  const [isFocused, toggleIsFocused] = useReducer((state) => !state, false)

  return (
    <S.Container focused={isFocused} error={error}>
      <Icon color={theme.colors['grayScale-01']} size={theme.iconSizes['iconTitle-01']} />

      <S.TextInputContainer>
        <S.Label
          filled={Boolean(value?.length)}
          focused={isFocused}
          error={error}
        >
          {label}
        </S.Label>

        <S.Input
          onFocus={toggleIsFocused}
          onBlur={toggleIsFocused}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
      </S.TextInputContainer>

      {
        !!value?.length && (
          <S.ClearButton onPress={() => onChangeText?.('')}>
            <S.ClearIcon />
          </S.ClearButton>
        )
      }
    </S.Container>
  );
}


