import { Dimensions } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { CardCarProps } from '.';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width * 0.9}px;
  background-color: ${({ theme }) => theme.colors.white};
  height: ${height * 0.15}px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.line};
`;

export const ContentInfo = styled.View`
  width: ${width * 0.3}px;
  justify-content: space-between;
`;

export const Separator = styled.View``;

export const ContainerPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const uppercase = styled.Text`
  text-transform: uppercase;
`;

export const BrandName = styled(uppercase)`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const Name = styled(uppercase)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape_dark};
  font-weight: 600;
`;

export const Period = styled(BrandName)``;

export const Price = styled(uppercase)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const Type = styled.Text``;

export const ContainerCar = styled.View`
  width: ${width * 0.6}px;
  height: ${height * 0.15}px;
`;

export const Car = styled.Image`
  width: 100%;
  height: 100%;
`;
