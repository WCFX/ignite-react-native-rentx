import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(130)}px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View``;
export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.black};
`;
