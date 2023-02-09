import React, {useState} from 'react';
import {StyleSheet, FlatList, View, useWindowDimensions} from 'react-native';
import Onboarding from '../components/Onboarding';
import Dot from '../components/Dot';
import colors from '../utils/colors';

function Intro() {
  const {height, width} = useWindowDimensions();
  const [dotActive, setDotActive] = useState(0);
  const screensOnboarding = [
    {
      id: '0',
      title: 'Planning Trips?',
      description:
        'Plan your trips anytime anywhere with -out thinking about your pets...',
      bgColor: colors.yellow,
    },
    {
      id: '1',
      title: 'Worrying about pet??',
      description:
        'Plan your trips anytime anywhere with -out thinking about your pets...',
      bgColor: colors.pink,
    },
    {
      id: '2',
      title: 'Missing your pet?',
      description:
        'Plan your trips anytime anywhere with -out thinking about your pets...',
      bgColor: colors.purple,
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
            id={Number(item.id)}
            bgColor={item.bgColor}
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
        <Dot enable={dotActive === 0} />
        <Dot enable={dotActive === width} />
        <Dot enable={dotActive === width * 2} />
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
});

export default Intro;
