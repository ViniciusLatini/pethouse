import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

import Footprint from './Footprint';

interface OnboardingProps {
  title: string;
  description: string;
  img: number;
}

function Onboarding({title, description, img}: OnboardingProps) {
  let imageActive, bgColor;
  if (img === 0) {
    imageActive = require('../assets/Saly-3.png');
    bgColor = colors.yellow;
  } else if (img === 1) {
    imageActive = require('../assets/Saly-9.png');
    bgColor = colors.pink;
  } else {
    imageActive = require('../assets/Sally-4.png');
    bgColor = colors.purple;
  }

  return (
    <>
      <View style={{...styles.background, backgroundColor: bgColor}}>
        <Image source={imageActive} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {img <= 1 ? (
          <Footprint screen={img} />
        ) : (
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonFill} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 280,
    width: 280,
    resizeMode: 'contain',
    marginTop: 29,
  },
  content: {
    marginHorizontal: 24,
  },
  title: {
    marginTop: 15,
    fontFamily: fonts.heading,
    fontSize: 30,
  },
  description: {
    marginTop: 25,
    fontFamily: fonts.description,
    fontSize: 18,
  },
  button: {
    height: 58,
    width: 58,
    borderWidth: 3,
    marginBottom: 50,
    borderRadius: 29,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFill: {
    height: 48,
    width: 48,
    backgroundColor: colors.black,
    borderRadius: 24,
  },
});

export default Onboarding;
