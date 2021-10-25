import React from 'react';

import { Logo } from '~/assets';
import { CardCar } from '~/components';

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
        <CardCar
          brandname="audi"
          name="rs6 avant"
          infoday="ao dia"
          price="340"
          type="gasoline"
          car="https://production.autoforce.com/uploads/version/profile_image/5035/model_main_comprar-tiptronic_c48874ad37.png"
        />
        <CardCar
          brandname="audi"
          name="rs6 avant"
          infoday="ao dia"
          price="340"
          type="energy"
          car="https://production.autoforce.com/uploads/version/profile_image/5035/model_main_comprar-tiptronic_c48874ad37.png"
        />
        <CardCar
          brandname="audi"
          name="rs6 avant"
          infoday="ao dia"
          price="340"
          type="energy"
          car="https://production.autoforce.com/uploads/version/profile_image/5035/model_main_comprar-tiptronic_c48874ad37.png"
        />
      </S.Content>
    </S.Container>
  );
};
export default Home;
