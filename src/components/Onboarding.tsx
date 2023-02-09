import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import Icon from 'react-native-vector-icons/Feather';

import Footprint from './Footprint';

interface OnboardingProps {
  title: string;
  description: string;
  img: number;
}

function Onboarding({title, description, img}: OnboardingProps) {
  const {width} = useWindowDimensions();
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
      <View style={{...styles.background, backgroundColor: bgColor, width}}>
        <Image source={imageActive} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {img <= 1 ? (
          <Footprint screen={img} />
        ) : (
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.buttonFill}>
                <Icon name="chevron-right" size={30} color={colors.purple} />
              </View>
            </TouchableOpacity>
          </View>
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
  dotsContent: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 3,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.black,
  },
  container: {
    marginBottom: 50,
    alignItems: 'center',
  },
  button: {
    height: 58,
    width: 58,
    borderWidth: 3,
    marginBottom: 40,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Onboarding;
