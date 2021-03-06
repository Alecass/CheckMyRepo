import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
//components
import ModalOpener from '../components/ModalOpener';
import Button from '../components/Button';
import Loader from '../components/Loader';
//state
import {AppContext} from '../state/appState';
import Error from '../components/Error';

const Main = ({navigation}) => {
  //your telegram push bot api key
  const API = '';
  const DOMAIN = 'https://github.com/';

  const [repoUrl, setRepoUrl] = useState();
  const [loading, setLoading] = useState();
  const [app, setApp] = useContext(AppContext);

  //type paramater => name of the selected modal page(User or Repository)
  const openModal = (type) => {
    navigation.navigate('Modal', {type: type});
    setApp({...app, isReadyToSend: false});
  };

  const errorHandler = () => {
    if (!app.isConnected) {
      return (
        <Error
          err={'Check your internet connection'}
          boldWords={['internet', 'connection']}
        />
      );
    } else if (app.badRepo) {
      return (
        <Error
          err={'check your username or your repository name'}
          boldWords={['username', 'repository']}
        />
      );
    }
  };

  //check button pressed =>
  const checkRepo = () => {
    setLoading(true);
    const repo = `${DOMAIN}${app.user}/${app.repo}`;
    setRepoUrl(repo);
    //check if the repository is available
    fetch(repo)
      .then((server) => {
        setLoading(false);
        if (server.status !== 200) {
          //NO REPO
          setApp({...app, badRepo: true, isConnected: true});
        } else {
          //SUCCESS
          if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('green');
          }
          setApp({
            ...app,
            badRepo: false,
            isConnected: true,
            isReadyToSend: true,
          });
        }
      })
      .catch(() => {
        //ERROR
        setLoading(false);
        setApp({...app, isConnected: false});
      });
  };

  //send button pressed => do post request
  const sendMessage = () => {
    setLoading(true);
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
        setLoading(false);
        if (res.status === 200) {
          navigation.navigate('Success');
        }
      })
      //ERROR
      .catch(() => {
        setLoading(false);
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
      <Loader loading={loading} />

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
