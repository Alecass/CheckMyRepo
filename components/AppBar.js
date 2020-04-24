import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AppBar = ({navigation}) => {
  const backHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={backHandler}>
          <Image
            style={styles.icon}
            source={require('../assets/images/back_icon/back.png')}></Image>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Title</Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
  },
  title: {
    marginLeft: 25,
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
  },
});
