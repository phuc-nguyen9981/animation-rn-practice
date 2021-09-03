import TouchBall from 'screen/TouchBallScreen';
import SharedValueAnim from 'screen/SharedValueReanim';
import TinderSwipe from 'screen/TinderSwipe';
import Wallet from 'screen/Wallet';
import SharedElementBasic from 'screen/SharedElementsBasic';
import ShareElementDetail from 'screen/SharedElementsBasic/DetailItem';

export const LIST_SCREEN = [
  {
    title: 'Touch Ball',
    screenName: 'TouchBall',
    screen: TouchBall,
    isMenu: true,
  },
  {
    title: 'SharedValue Reanimated',
    screenName: 'SharedValueAnim',
    screen: SharedValueAnim,
    isMenu: true,
  },
  {
    title: 'Tinder Swipe',
    screenName: 'TinderSwipe',
    screen: TinderSwipe,
    isMenu: true,
  },
  {
    title: 'Wallet Scroll Animation',
    screenName: 'Wallet',
    screen: Wallet,
    isMenu: true,
  },
  {
    title: 'Shared Elements Basic',
    screenName: 'SharedElementsBasic',
    screen: SharedElementBasic,
    isMenu: true,
  },
  {
    title: 'Shared Elements Detail',
    screenName: 'SharedElementsDetail',
    screen: ShareElementDetail,
    isMenu: false,
  },
];
