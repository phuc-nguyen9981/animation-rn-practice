import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'constant/screen';
import {getRandomNumberInRange} from 'utils/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#3287a8',
    borderRadius: 20,
    width: 70,
    height: 70,
  },
  button: {
    position: 'absolute',
    bottom: 20,
  },
});

const SharedValueReanim = () => {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(offsetX.value, {
          duration: 500,
          easing: Easing.inOut(Easing.linear),
        }),
      },
      {
        translateY: withTiming(offsetX.value, {
          duration: 500,
          easing: Easing.inOut(Easing.exp),
        }),
      },
    ],
  }));

  const changeOffset = () => {
    offsetX.value = getRandomNumberInRange(-SCREEN_WIDTH, SCREEN_WIDTH) / 2;
    offsetY.value = getRandomNumberInRange(-SCREEN_HEIGHT, SCREEN_HEIGHT) / 2;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.button}>
        <Button title={'Move'} onPress={changeOffset} />
      </View>
    </View>
  );
};

export default SharedValueReanim;
