import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderText from '../components/HeaderText';

function Login() {
  return (
    <View style={styles.background}>
      <HeaderText />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default Login;
