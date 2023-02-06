import React from 'react';
import {Image, StyleSheet} from 'react-native';

import dogFootprint from '../assets/dogFootprint.png';

export interface FootprintProps {
  screen: number;
}

function Footprint({screen}: FootprintProps) {
  if (screen === 1) {
    return <Image source={dogFootprint} style={styles.footprint1} />;
  } else {
    return <Image source={dogFootprint} style={styles.footprint0} />;
  }
}

const styles = StyleSheet.create({
  footprint0: {
    alignSelf: 'baseline',
  },
  footprint1: {
    alignSelf: 'flex-end',
    transform: [{rotate: '-90deg'}],
    marginBottom: -1,
  },
});

export default Footprint;
