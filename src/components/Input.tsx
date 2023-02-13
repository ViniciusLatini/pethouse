import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import fonts from '../utils/fonts';
import colors from '../utils/colors';

interface InputProps {
  placeholder: string;
  label: string;
}

function Input({placeholder, label}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
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
    paddingLeft: 22,
  },
});

export default Input;
