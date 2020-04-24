import React from 'react';

import Navigation from './components/Navigation';
import {StatusBar} from 'react-native';
import {useEffect} from 'react';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Navigation></Navigation>
    </>
  );
};

export default App;
