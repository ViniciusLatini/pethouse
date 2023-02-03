import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'Ubuntu-Bold',
  },
});

export default App;
