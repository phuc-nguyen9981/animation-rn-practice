import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'constant/screen';
import React from 'react';
import {StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const BALL_WIDTH = 50,
  BALL_HEIGHT = 50;

const START_X = SCREEN_WIDTH / 2 - BALL_WIDTH;
const START_Y = SCREEN_HEIGHT / 2 - BALL_WIDTH;
// const START_X = 0;
// const START_Y = 0;
const TouchBallScreen = () => {
  const x = useSharedValue(START_X);
  const y = useSharedValue(START_Y);
  const pressed = useSharedValue(false);

  const getureHandler = useAnimatedGestureHandler({
    onStart: function (e, ctx: any) {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (e, ctx: any) => {
      x.value = ctx.startX + e.translationX;
      y.value = ctx.startY + e.translationY;
    },
    onEnd: () => {
      pressed.value = false;
    },
  });

  const ballAnimStyle = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FEEF86' : '#001972',
    transform: [
      {
        translateX: x.value,
      },
      {
        translateY: y.value,
      },
    ],
  }));

  return (
    <>
      <PanGestureHandler onGestureEvent={getureHandler}>
        <Animated.View style={[styles.ball, ballAnimStyle]} />
      </PanGestureHandler>
    </>
  );
};

const styles = StyleSheet.create({
  ball: {
    borderRadius: 50,
    width: BALL_WIDTH,
    height: BALL_HEIGHT,
  },
});

export default TouchBallScreen;
