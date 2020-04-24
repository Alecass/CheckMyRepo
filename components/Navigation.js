import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

//Main Page
import Main from '../screens/Main';
//Secondary pages
import Modal from './Modal';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => {
            null;
          },
        }}>
        <Stack.Screen name="MainPage" component={Main} />
        <Stack.Screen
          name="SecondaryPage"
          options={{...TransitionPresets.ModalSlideFromBottomIOS}}
          component={Modal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
