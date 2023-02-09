import React from 'react';
import {StyleSheet, View} from 'react-native';

interface DotProps {
  enable: boolean;
}

function Dot({enable}: DotProps) {
  let width = enable ? 16 : 6;
  return <View style={{...styles.dot, width}} />;
}

const styles = StyleSheet.create({
  dot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
  },
});

export default Dot;
