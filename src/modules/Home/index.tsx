import React from 'react';

import { NavigationRouteContext, useNavigation } from '@react-navigation/core';
import shortid from 'shortid';

import { Logo } from '~/assets';
import { CardCar } from '~/components';

// import {  } from '~/helpers';
// import {  } from '~/types';
import * as S from './styles';

const Home = () => {
  const { navigate } = useNavigation();

  const products = {
    brand: 'audi',
    name: 'rs6 avant',
    rent: {
      period: 'ao dia',
      price: 340,
    },
    // type: 'gasoline',
    photo:
      'https://production.autoforce.com/uploads/version/profile_image/5035/model_main_comprar-tiptronic_c48874ad37.png',
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <Logo />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>
      <S.CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        keyExtractor={shortid.generate}
        renderItem={({ item }) => (
          <CardCar onPress={() => navigate('CarDetail')} data={products} />
        )}
      />
    </S.Container>
  );
};
export default Home;
