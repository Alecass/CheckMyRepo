import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SecondaryPage');
        }}>
        <Text style={styles.title}>Set the repository address</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 25,
    fontFamily: 'OpenSans-Bold',
  },
});
