import Typography from 'components/Typography';
import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from 'constant/screen';
import useTheming from 'hooks/theming';
import LinearGradient from 'react-native-linear-gradient';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface TinderCardProps {
  name: string;
  age: number;
  avatar: ImageSourcePropType;
  style: object;
}

const styles = StyleSheet.create({
  container: {
    height: 0.8 * SCREEN_HEIGHT,
    width: 0.9 * SCREEN_WIDTH,
    borderRadius: 25,
    alignSelf: 'center',
  },
  imageBackground: {
    flex: 1,
    borderRadius: 25,
    overflow: 'hidden',
  },
  description: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    shadowColor: '#00000011',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

const MIN_SWIPE = SCREEN_WIDTH / 3;

const TinderCard = ({
  name = '',
  age = 0,
  avatar = require('../asset/tinder-img-01.jpg'),
  style = {},
}: TinderCardProps) => {
  const {spacing}: any = useTheming();
  const dx = useSharedValue(0);
  const dy = useSharedValue(0);
  const rotate = useSharedValue(0);
  const cardAnimStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: dx.value},
      {translateY: dy.value},
      {
        rotate: rotate.value + 'deg',
      },
    ],
  }));

  const forceSwipe = (direction: string) => {
    'worklet';
    dx.value =
      direction === 'right'
        ? withTiming(SCREEN_WIDTH * 2, {duration: 500})
        : withTiming(-SCREEN_WIDTH * 2, {duration: 500});
  };

  const onTouchEvent = useAnimatedGestureHandler({
    onStart: (e, ctx: any) => {
      ctx.startX = dx.value;
      ctx.startY = dy.value;
    },
    onActive: (e, ctx: any) => {
      dx.value = ctx.startX + e.translationX;
      dy.value = ctx.startY + e.translationY;
      rotate.value = interpolate(
        e.translationX,
        [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
        [-45, 0, 45],
        Extrapolate.CLAMP,
      );
      if (e.translationY > 0) {
        rotate.value = interpolate(
          e.translationY,
          [0, SCREEN_HEIGHT],
          [rotate.value, rotate.value / 3],
          Extrapolate.CLAMP,
        );
      }
    },
    onEnd: e => {
      if (e.translationX > MIN_SWIPE) {
        return forceSwipe('right');
      } else if (e.translationX < -MIN_SWIPE) {
        return forceSwipe('left');
      }
      dx.value = withSpring(0, {
        damping: 10,
        overshootClamping: true,
      });
      dy.value = withSpring(0, {
        damping: 10,
        overshootClamping: true,
      });
      rotate.value = 0;
    },
  });

  return (
    <View style={style}>
      <PanGestureHandler onGestureEvent={onTouchEvent}>
        <Animated.View
          style={[styles.container, {marginTop: spacing(2)}, cardAnimStyle]}>
          <ImageBackground source={avatar} style={styles.imageBackground}>
            <LinearGradient
              colors={['#0f0f0f11', '#000000']}
              style={[
                styles.description,
                {
                  paddingBottom: spacing(4),
                  paddingHorizontal: spacing(4),
                },
              ]}>
              <Typography color={'white'} variant="h1" bold>
                {name}
              </Typography>
              <Typography color={'white'} variant="h3" bold>
                {`Age: ${age}`}
              </Typography>
            </LinearGradient>
          </ImageBackground>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default TinderCard;
