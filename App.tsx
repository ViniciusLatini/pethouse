import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Intro from './src/screens/Intro';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <SafeAreaView style={styles.bg}>
        <Intro />
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
