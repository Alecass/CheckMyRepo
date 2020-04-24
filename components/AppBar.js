import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AppBar = ({navigation, title}) => {
  const backHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backHandler}>
        <Image
          style={styles.icon}
          source={require('../assets/images/back_icon/back.png')}></Image>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    marginLeft: 25,
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
  },
  icon: {
    height: 18,
    width: 22,
  },
});
