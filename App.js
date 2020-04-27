import React from 'react';
import Navigation from './components/Navigation';
//state
import {AppProvider} from './state/appState';
const App = () => {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
};

export default App;
