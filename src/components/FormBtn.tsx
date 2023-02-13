import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

interface FormBtn extends TouchableOpacityProps {
  text: string;
}

function FormBtn({text}: FormBtn) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.purple,
    height: 50,
    width: 192,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: colors.black,
    elevation: 3,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 18,
    shadowColor: colors.black,
  },
});

export default FormBtn;
