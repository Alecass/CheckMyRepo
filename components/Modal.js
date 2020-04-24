import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppBar from './AppBar';

const Modal = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <AppBar navigation={navigation} title={route.params.type}></AppBar>
      <Text></Text>
    </SafeAreaView>
  );
};

export default Modal;

const styles = StyleSheet.create({});
