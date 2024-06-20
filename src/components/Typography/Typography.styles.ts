import styled from 'styled-components/native';
import { ITypographyProps } from './Typography';

export const Typography = styled.Text<ITypographyProps>`
  font-size: ${({ theme: { fontSizes }, variant }) =>
    variant ? fontSizes[variant] : fontSizes['body-01']};

  line-height: ${({ theme: { lineHeights }, variant }) =>
    variant ? lineHeights[variant] : lineHeights['body-01']};

  color: ${({ theme: { colors }, color }) =>
    color ? colors[color] : colors['grayScale-01']};

  font-family: ${({ theme: { fontFamily }, weight }) =>
    weight ? fontFamily[weight] : fontFamily['regular']};

  text-align: ${({ align }) => (align ? align : 'left')};
`;
