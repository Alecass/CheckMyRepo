import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
//components
import ModalOpener from '../components/ModalOpener';
import Button from '../components/Button';
//state
import {AppContext} from '../state/appState';
import Error from '../components/Error';

const Main = ({navigation}) => {
  const API = 'https://pushmore.marc.io/webhook/3MuQhpkaxmkzpzXfBTCXZAEb';
  const [repoUrl, setRepoUrl] = useState();
  const [app, setApp] = useContext(AppContext);

  const openModal = (type) => {
    navigation.navigate('Modal', {type: type});
    setApp({...app, isReadyToSend: false});
  };

  const errorHandler = () => {
    if (!app.isConnected) {
      return (
        <Error
          err={'Check your internet connection'}
          boldWords={['internet', 'connection']}></Error>
      );
    } else if (app.badRepo) {
      return (
        <Error
          err={'check your username or your repository name'}
          boldWords={['username', 'repository']}></Error>
      );
    }
  };

  const checkRepo = () => {
    let repo = `https://github.com/${app.user}/${app.repo}`;
    setRepoUrl(repo);
    //check if the repository is available
    fetch(repo)
      .then((server) => {
        if (server.status != 200) {
          //NO REPO
          setApp({...app, badRepo: true, isConnected: true});
        } else {
          //SUCCESS
          setApp({
            ...app,
            badRepo: false,
            isConnected: true,
            isReadyToSend: true,
          });
        }
      })
      .catch((err) => {
        //ERROR
        setApp({...app, isConnected: false});
      });
  };

  const sendMessage = () => {
    fetch(API, {
      method: 'POST',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'text/plain',
      },
      body: `👉🏻 ${repoUrl} \n👽 Alessio Cassano`,
    })
      .then((res) => {
        //SUCCESS
        if (res.status === 200) {
          navigation.navigate('Success');
        }
      })
      .catch((err) => {
        setApp({...app, isConnected: false, isReadyToSend: false});
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Set the repository address</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.domain}>Github.com</Text>
      </View>
      {/* open a modal for the selected input */}
      <ModalOpener
        hint={app.user}
        open={() => {
          openModal('User');
        }}
      />
      <ModalOpener
        hint={app.repo}
        open={() => {
          openModal('Repository');
        }}
      />
      {errorHandler()}

      {/* check && send button */}
      <Button
        name={app.isReadyToSend ? 'SEND' : 'CHECK'}
        pressed={!app.isReadyToSend ? checkRepo : sendMessage}
      />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
  },
  inputContainer: {
    marginTop: 20,
  },
  domain: {
    fontSize: 32,
    fontFamily: 'OpenSans-Regular',
  },
});
