import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppBar from './AppBar';

const Modal = ({navigation}) => {
  return (
    <SafeAreaView>
      <AppBar navigation={navigation}></AppBar>
      <Text>Modal</Text>
    </SafeAreaView>
  );
};

export default Modal;

const styles = StyleSheet.create({});
