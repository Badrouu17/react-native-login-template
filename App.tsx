import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';

import { Provider as ReduxProvider } from 'react-redux';
import store from './src/redux/reduxStore';

import App from './src';
import { theme } from './src/core/theme';

const Main = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ReduxProvider>
);

export default Main;
