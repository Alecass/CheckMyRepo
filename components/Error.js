import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {useEffect} from 'react';

const Error = ({err, boldWords, isCentered, ...props}) => {
  //algorithm for creating rich text
  const RichText = () => {
    //error string message => to array of single words
    const wordsArray = err.split(/\s+/);
    //create a <Text> for each word in the array
    return (
      <Text
        style={[styles.errText, {textAlign: isCentered ? 'center' : 'left'}]}>
        {wordsArray.map((word, index) => {
          let isBold = false;
          //compare each word if is in the list of bold words
          if (boldWords != null || boldWords != undefined) {
            boldWords.map((boldWord) => {
              if (boldWord === word) {
                isBold = true;
              }
            });
          }
          return (
            <Text
              key={index}
              style={{
                fontFamily: isBold ? 'OpenSans-Bold' : 'OpenSans-Regular',
              }}>
              {word + ' '}
            </Text>
          );
        })}
      </Text>
    );
  };

  return (
    <View style={[styles.errContainer, {width: isCentered ? null : 300}]}>
      {RichText()}
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  errText: {
    fontSize: 22,
  },
  errContainer: {
    marginTop: 8,
  },
});
