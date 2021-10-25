import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  color: string;
}

const BackButton = ({ color, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <S.Container {...rest}>
      {/* <FontAwesome name="left" color={color || theme.colors.text} size={24} /> */}
      <Text>{'<--'}</Text>
    </S.Container>
  );
};
export default BackButton;
