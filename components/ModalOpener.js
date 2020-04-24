import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ModalOpener = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.open}>
        <View style={styles.hintContainer}>
          <Text style={styles.domain}>/</Text>
          <Text style={styles.hint}>{props.hint}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ModalOpener;

const styles = StyleSheet.create({
  domain: {
    fontSize: 32,
    fontFamily: 'OpenSans-LightBold',
  },
  hintContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  hint: {
    fontSize: 32,
    color: 'gray',
    fontFamily: 'OpenSans-LightBold',
  },
});
