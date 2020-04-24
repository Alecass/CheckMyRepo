import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import ModalOpener from '../components/ModalOpener';

const Main = ({navigation}) => {
  const openModal = (type) => {
    navigation.navigate('SecondaryPage', {type: type});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Set the repository address</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.domain}>Github.com</Text>
      </View>

      {/* open a modal for the selected input */}
      <ModalOpener
        hint={'user'}
        open={() => {
          openModal('User');
        }}
      />
      <ModalOpener
        hint={'repo'}
        open={() => {
          openModal('Repository');
        }}
      />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
  },
  inputContainer: {
    marginTop: 20,
  },
  domain: {
    fontSize: 32,
    fontFamily: 'OpenSans-LightBold',
  },
});
