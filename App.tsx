import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Routes from './src/routes';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={styles.bg}>
        <Routes />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default App;
