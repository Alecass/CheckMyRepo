import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Button from '../components/Button';

const Success = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.successText}>All Done!{'\n'}Repository Sent</Text>
      <Button
        name={'COOL'}
        pressed={() => {
          navigation.pop();
        }}
      />
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    margin: 20,
    display: 'flex',
    flex: 1,
  },
  successText: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'OpenSans-Bold',
  },
});
