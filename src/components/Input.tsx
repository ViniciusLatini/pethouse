import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import fonts from '../utils/fonts';
import colors from '../utils/colors';

function Input() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter phone number/email id!</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 13,
  },
  label: {
    fontSize: 15,
    fontFamily: fonts.text,
  },
  input: {
    height: 54,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.purple,
  },
});

export default Input;
