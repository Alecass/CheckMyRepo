import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
//state
import {AppContext} from '../state/appState';

const ModalOpener = ({open, hint}) => {
  const [app, setApp] = useContext(AppContext);

  return (
    <TouchableOpacity onPress={open}>
      <View style={styles.hintContainer}>
        <Text style={styles.domain}>/</Text>
        <Text
          style={[styles.hint, {color: app[hint] != hint ? 'black' : 'gray'}]}>
          {hint}
        </Text>
      </View>
    </TouchableOpacity>
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
    fontFamily: 'OpenSans-Regular',
  },
});
