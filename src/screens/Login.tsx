import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import HeaderText from '../components/HeaderText';
import Input from '../components/Input';
import fonts from '../utils/fonts';
import colors from '../utils/colors';

function Login() {
  return (
    <View style={styles.background}>
      <HeaderText />
      <View style={styles.inputContainer}>
        <Input />
        <Input />
      </View>
      <Text style={styles.forgetPass}>Forget Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 24,
  },
  inputContainer: {
    gap: 20,
  },
  forgetPass: {
    textAlign: 'right',
    marginTop: 10,
    fontFamily: fonts.text,
    color: colors.gray,
  },
});

export default Login;
