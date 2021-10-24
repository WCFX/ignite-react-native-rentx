import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as View from '~/screens';

const { Navigator, Screen } = createNativeStackNavigator();

const routes: React.FC = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={View.Home} />
    </Navigator>
  );
};

export default routes;
