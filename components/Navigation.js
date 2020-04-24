import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
//state
import {AppProvider} from '../state/appState';
//Main Page
import Main from '../screens/Main';
//Secondary pages
import Modal from '../screens/Modal';

const Stack = createStackNavigator();

const Navigation = ({isConnected}) => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => {
              null;
            },
            cardStyle: {
              backgroundColor: isConnected ? 'whitesmoke' : 'rgb(252,154,156)',
            },
          }}>
          <Stack.Screen name="MainPage" component={Main} />
          <Stack.Screen
            name="Modal"
            options={{...TransitionPresets.ModalSlideFromBottomIOS}}
            component={Modal}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Navigation;
