import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
//Main Page
import Main from '../screens/Main';
//Secondary pages
import Modal from '../screens/Modal';
//state
import {AppContext} from '../state/appState';
//components
import Success from '../screens/Success';

const Stack = createStackNavigator();

const Navigation = () => {
  const [app] = useContext(AppContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => {
            null;
          },
        }}>
        <Stack.Screen
          //set screen color basing on app state
          options={{
            cardStyle: {
              backgroundColor:
                !app.isConnected || app.badRepo
                  ? 'rgb(252,154,156)'
                  : app.isConnected && !app.badRepo && app.isReadyToSend
                  ? 'rgb(192,255,210)'
                  : 'whitesmoke',
            },
          }}
          name="MainPage"
          component={Main}
        />
        <Stack.Screen
          name="Modal"
          options={{...TransitionPresets.ModalSlideFromBottomIOS}}
          component={Modal}
        />
        <Stack.Screen
          name="Success"
          options={{...TransitionPresets.ModalSlideFromBottomIOS}}
          component={Success}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
