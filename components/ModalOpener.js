import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ModalOpener = ({open, hint}) => {
  return (
    <>
      <TouchableOpacity onPress={open}>
        <View style={styles.hintContainer}>
          <Text style={styles.domain}>/</Text>
          <Text style={styles.hint}>{hint}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ModalOpener;

const styles = StyleSheet.create({
  domain: {
    fontSize: 32,
    fontFamily: 'OpenSans-Regular',
  },
  hintContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  hint: {
    fontSize: 32,
    color: 'gray',
    fontFamily: 'OpenSans-Regular',
  },
});
