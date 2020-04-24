import React, {useEffect, useState} from 'react';

import Navigation from './components/Navigation';
import {StatusBar} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [isConnected, setIsConnected] = useState();

  //listener for checking realtime internet connection changes
  useEffect(() => {
    const network = NetInfo.addEventListener((info) => {
      setIsConnected(info.isConnected);
    });
    //disable listner on unmount
    return () => {
      network();
    };
  });

  return (
    <>
      <StatusBar
        animated
        backgroundColor="whitesmoke"
        barStyle={'dark-content'}></StatusBar>
      <Navigation isConnected={isConnected}></Navigation>
    </>
  );
};

export default App;
