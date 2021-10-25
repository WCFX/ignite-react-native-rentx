import { Dimensions, Platform } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  width: ${width}px;
  height: ${Platform.OS === 'ios' ? height * 0.15 : height * 0.18}px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 24px 32px;
`;
export const TotalCars = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
export const Content = styled.ScrollView``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.black};
`;
