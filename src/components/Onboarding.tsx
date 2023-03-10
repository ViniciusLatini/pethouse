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
import {useNavigation} from '@react-navigation/native';

import Footprint from './Footprint';

interface OnboardingProps {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

function Onboarding({id, title, description, bgColor}: OnboardingProps) {
  const {width} = useWindowDimensions();
  let imageActive;
  if (id === 0) {
    imageActive = require('../assets/Saly-3.png');
  } else if (id === 1) {
    imageActive = require('../assets/Saly-9.png');
  } else {
    imageActive = require('../assets/Sally-4.png');
  }

  const navigation = useNavigation();

  function handleNext() {
    navigation.navigate('signIn');
  }

  return (
    <>
      <View style={{...styles.background, backgroundColor: bgColor, width}}>
        <Image source={imageActive} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {id <= 1 ? (
          <Footprint screen={id} />
        ) : (
          <View style={styles.container}>
            <TouchableOpacity onPress={handleNext} style={styles.button}>
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
