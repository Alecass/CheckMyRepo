import React from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const Button = ({name, pressed}) => {
  /* Ios => add keyboard avoiding view to prevent the keyboard for going over the button.*/

  /* Android => automatically update the view height using flex. Use of KeyboardAvoidingView not indispensable */

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{
        display: 'flex',
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <TouchableOpacity
        onPress={() => {
          pressed();
        }}>
        <Text style={{fontSize: 25, fontFamily: 'OpenSans-Bold'}}>{name}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Button;

const styles = StyleSheet.create({});
