import React, {useState} from 'react';
import {StyleSheet, FlatList, View, useWindowDimensions} from 'react-native';

import Onboarding from '../components/Onboarding';

function Intro() {
  const {height, width} = useWindowDimensions();
  const [dotActive, setDotActive] = useState(0);
  const screensOnboarding = [
    {
      id: '0',
      idx: 0,
      title: 'Planning Trips?',
      description:
        'Plan your trips anytime anywhere with -out thinking about your pets...',
    },
    {
      id: '1',
      idx: 1,
      title: 'Worrying about pet??',
      description:
        'Plan your trips anytime anywhere with -out thinking about your pets...',
    },
    {
      id: '2',
      idx: 2,
      title: 'Missing your pet?',
      description:
        'Plan your trips anytime anywhere with -out thinking about your pets...',
    },
  ];

  return (
    <>
      <FlatList
        data={screensOnboarding}
        renderItem={({item}) => (
          <Onboarding
            title={item.title}
            description={item.description}
            img={item.idx}
          />
        )}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={event => {
          setDotActive(event.nativeEvent.contentOffset.x);
        }}
        bounces={false}
      />

      <View style={{...styles.dotsContent, top: height - 50}}>
        {dotActive === 0 ? (
          <View style={{...styles.dot, width: 16}} />
        ) : (
          <View style={styles.dot} />
        )}
        {dotActive === width ? (
          <View style={{...styles.dot, width: 16}} />
        ) : (
          <View style={styles.dot} />
        )}
        {dotActive === width * 2 ? (
          <View style={{...styles.dot, width: 16}} />
        ) : (
          <View style={styles.dot} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  dotsContent: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    flex: 1,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
  },
});

export default Intro;
