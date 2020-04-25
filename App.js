import React from 'react';

import Navigation from './components/Navigation';
import {StatusBar} from 'react-native';
//state
import {AppProvider} from './state/appState';

const App = () => {
  return (
    <AppProvider>
      <StatusBar
        animated
        backgroundColor="whitesmoke"
        barStyle={'dark-content'}></StatusBar>
      <Navigation></Navigation>
    </AppProvider>
  );
};

export default App;
