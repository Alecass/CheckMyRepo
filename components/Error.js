import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Error = ({err}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.errText}>{err}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  errText: {
    color: 'red',
    fontFamily: 'OpenSans-ExtraBold',
  },
});
