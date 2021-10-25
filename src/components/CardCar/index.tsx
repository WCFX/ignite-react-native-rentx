import React from 'react';

import { Hybrid, Gasoline } from '~/assets';
import { CardCarProps } from '~/types';

import * as S from './styles';

const CardCar = ({ brandname, name, infoday, price, type }: CardCarProps) => {
  return (
    <S.Container>
      <S.ContentInfo>
        <S.Separator>
          <S.BrandName>{brandname}</S.BrandName>
          <S.Name>{name}</S.Name>
        </S.Separator>
        <S.Separator>
          <S.Infoday>{infoday}</S.Infoday>
          <S.ContainerPrice>
            <S.Price>R$ {price}</S.Price>
            <S.Type>{type === 'gasoline' ? <Gasoline /> : <Hybrid />}</S.Type>
          </S.ContainerPrice>
        </S.Separator>
      </S.ContentInfo>
    </S.Container>
  );
};
export default CardCar;
