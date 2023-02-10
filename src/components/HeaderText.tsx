import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fonts from '../utils/fonts';

function HeaderText() {
  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.title}>SignIn</Text>
        <Text style={styles.subtitle}>SignIn to your existing account!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 92,
    gap: 14,
    marginBottom: 34,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.heading,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.text,
  },
});

export default HeaderText;
