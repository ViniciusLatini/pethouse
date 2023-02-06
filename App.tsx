import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Onboarding from './src/components/Onboarding';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <SafeAreaView style={styles.bg}>
        {/* <Onboarding
          title={'Planning Trips?'}
          description={
            'Plan your trips anytime anywhere with -out thinking about your pets...'
          }
          img={0}
        /> */}
        {/* <Onboarding
          title={'Worrying about pet??'}
          description={
            'Plan your trips anytime anywhere without thinking about your pets...'
          }
          img={1}
        /> */}
        <Onboarding
          title={'Missing your pet?'}
          description={
            'Plan your trips anytime anywhere with -out thinking about your pets...'
          }
          img={2}
        />
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
