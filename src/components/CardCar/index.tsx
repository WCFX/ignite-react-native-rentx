import React from 'react';

import { Energy, Gasoline } from '~/assets';
// import { CardCarProps } from '~/types';

import * as S from './styles';

export interface CardCarProps {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  // type: 'gasoline' | 'energy';
  photo: string;
}

interface Props {
  data: CardCarProps;
}

const CardCar = ({ data }: Props) => {
  return (
    <S.Container>
      <S.ContentInfo>
        <S.Separator>
          <S.BrandName>{data.brand}</S.BrandName>
          <S.Name>{data.name}</S.Name>
        </S.Separator>
        <S.Separator>
          <S.Period>{data?.rent?.period}</S.Period>
          <S.ContainerPrice>
            <S.Price>{`R$ ${data?.rent?.price}`}</S.Price>
            {/* <S.Type>
              {data.type === 'gasoline' ? <Gasoline /> : <Energy />}
            </S.Type> */}
          </S.ContainerPrice>
        </S.Separator>
      </S.ContentInfo>
      <S.ContainerCar>
        <S.Car
          source={{
            uri: data.photo,
          }}
        />
      </S.ContainerCar>
    </S.Container>
  );
};
export default CardCar;
