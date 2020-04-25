import React, {useState, useContext} from 'react';
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
import Error from '../components/Error';
//appState
import {AppContext} from '../state/appState';

const Modal = ({navigation, route}) => {
  const type = route.params.type;
  const [app, setApp] = useContext(AppContext);
  const [keyboardInput, setKeyboardInput] = useState('');
  const [err, setErr] = useState('');
  //catch the input event
  const inputUpdate = (text) => {
    setKeyboardInput(text);
  };

  //triggered when done button pressed
  const onDone = () => {
    //check wich page is open and assign the keyboard input to the relative state object
    if (keyboardInput != '') {
      if (type === 'User') {
        setApp({...app, user: keyboardInput});
      } else {
        setApp({...app, repo: keyboardInput});
      }
      navigation.pop();
    } else {
      setErr("Input form can't be empty😡");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBar navigation={navigation} title={type}></AppBar>
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus={true}
          onChange={(e) => {
            inputUpdate(e.nativeEvent.text);
          }}
          onSubmitEditing={onDone}
          value={keyboardInput}
          placeholderTextColor="gray"
          selectionColor={'rgba(23,23,23,0.2)'}
          style={styles.input}
          placeholder={
            type === 'User'
              ? 'Type your github username'
              : 'type your repository name'
          }
          underlineColorAndroid="black"
        />
      </View>
      {err != '' ? (
        <Error err={err} boldWords={["can't"]} isCentered={true} />
      ) : null}
      <Button name="DONE" pressed={onDone} />
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
