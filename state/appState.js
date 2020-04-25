import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [app, setApp] = useState({
    user: 'user',
    repo: 'repo',
    isConnected: true,
    badRepo: false,
    isReadyToSend: false,
  });
  return (
    <AppContext.Provider value={[app, setApp]}>
      {props.children}
    </AppContext.Provider>
  );
};
