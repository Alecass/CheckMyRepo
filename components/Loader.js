import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Easing, Animated} from 'react-native';
import {useEffect} from 'react';

const Loader = ({loading}) => {
  const [fade] = useState(new Animated.Value(0));

  useEffect(() => {
    animationHandler();
  }, [loading]);

  const animationHandler = () => {
    if (loading) {
      Animated.timing(fade, {
        toValue: 1,
        duration: 300,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fade, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Animated.View style={[styles.loaderContainer, {opacity: fade}]}>
      <View style={styles.loaderImageContainer}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/images/loading.gif')}
        />
      </View>
    </Animated.View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderImageContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 20,
  },
});
