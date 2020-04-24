import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
//components
import ModalOpener from '../components/ModalOpener';
import Button from '../components/Button';
//state
import {AppContext} from '../state/appState';
import Error from '../components/Error';

const Main = ({navigation}) => {
  const [app, setApp] = useContext(AppContext);

  const openModal = (type) => {
    navigation.navigate('Modal', {type: type});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Set the repository address</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.domain}>Github.com</Text>
      </View>
      {/* open a modal for the selected input */}
      <ModalOpener
        hint={app.user}
        open={() => {
          openModal('User');
        }}
      />
      <ModalOpener
        hint={app.repo}
        open={() => {
          openModal('Repository');
        }}
      />
      <Error
        err={'check your username or your repository name'}
        boldWords={['username', 'repository']}></Error>

      <Button
        name={'CHECK'}
        pressed={() => {
          console.log('CHECKING...');
        }}
      />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: 'OpenSans-Regular',
  },
});
