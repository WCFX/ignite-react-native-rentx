import React from 'react';

// import {  } from '~/components';
import { Logo } from '~/assets';

// import {  } from '~/helpers';
// import {  } from '~/types';
import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <Logo />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>
      <S.Content>
        <S.Title>Hello Motherfuckers </S.Title>
        <S.Description>Wagnifico na parada</S.Description>
      </S.Content>
    </S.Container>
  );
};
export default Home;
