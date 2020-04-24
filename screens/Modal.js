import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

const Modal = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar navigation={navigation} title={route.params.type}></AppBar>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="gray"
          selectionColor={'rgba(23,23,23,0.2)'}
          style={styles.input}
          placeholder={
            route.params.type === 'user'
              ? 'Type your github username'
              : 'type your repository name'
          }
          underlineColorAndroid="black"
        />
      </View>

      <Button
        name="DONE"
        pressed={() => {
          console.log('DONE');
        }}
      />
    </SafeAreaView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    display: 'flex',
  },
  inputContainer: {
    margin: 12,
  },
  input: {
    color: 'black',
    marginTop: 20,
    paddingLeft: 8,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    borderBottomWidth: Platform.OS === 'ios' ? 2 : null,
    borderBottomColor: Platform.OS === 'ios' ? 'black' : null,
  },
});
