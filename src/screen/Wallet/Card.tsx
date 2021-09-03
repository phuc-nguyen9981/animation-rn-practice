import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from 'constant/screen';

interface CardProps {
  index: number;
  source: ImageSourcePropType;
  offsetY: Animated.SharedValue<number>;
}

const CARD_HEIGHT = 230;

const style = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  card: {
    width: 0.9 * SCREEN_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    marginVertical: 10,
  },
});

const Card = ({
  index,
  source = require('../../asset/images/wallet/card1.png'),
  offsetY,
}: CardProps) => {
  // const curY = useMemo(() =>  [
  //   key,
  //   offsetY.value,
  // ]);
  const animStyle = useAnimatedStyle(() => {
    const position = CARD_HEIGHT * index - offsetY.value;
    const scale = interpolate(
      position,
      [0, CARD_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP,
    );
    const translate = interpolate(
      position,
      [0, CARD_HEIGHT],
      [CARD_HEIGHT, 0],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      position,
      [CARD_HEIGHT / 3, CARD_HEIGHT],
      [0.5, 1],
    );
    return {
      opacity,
      transform: [
        {
          scale: scale,
        },
        {
          translateY: translate,
        },
      ],
    };
  });
  return (
    <Animated.View style={[style.container, animStyle]}>
      <Image source={source} style={[style.card]} resizeMode="cover" />
    </Animated.View>
  );
};

export default Card;
