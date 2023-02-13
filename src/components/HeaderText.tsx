import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fonts from '../utils/fonts';

interface HeaderTextProps {
  title: string;
  subtitle: string;
}

function HeaderText({title, subtitle}: HeaderTextProps) {
  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
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
