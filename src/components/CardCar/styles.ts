import { Dimensions } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width * 0.9}px;
  background-color: ${({ theme }) => theme.colors.white};
  height: ${height * 0.15}px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
`;

export const ContentInfo = styled.View`
  width: ${width * 0.35}px;
  justify-content: space-between;

  height: 100%;
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
  font-size: ${RFValue(13)}px;
  font-weight: 600;
`;

export const Infoday = styled(BrandName)``;

export const Price = styled(uppercase)`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const Type = styled.View``;
