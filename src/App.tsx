import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import theme from './styles';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
        <StatusBar barStyle="dark-content" />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
