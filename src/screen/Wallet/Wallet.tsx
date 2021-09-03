import Header from 'components/Header';
import React from 'react';
import {StyleSheet, View, FlatList, ImageSourcePropType} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Card from './Card';

const FlatListAnim = Animated.createAnimatedComponent(FlatList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
});

interface CardType {
  id: number;
  source: ImageSourcePropType;
}

const LIST_CARD: CardType[] = [
  {
    id: 1,
    source: require('asset/images/wallet/card1.png'),
  },
  {
    id: 2,
    source: require('asset/images/wallet/card2.png'),
  },
  {
    id: 3,
    source: require('asset/images/wallet/card3.png'),
  },
  {
    id: 4,
    source: require('asset/images/wallet/card4.png'),
  },
  {
    id: 5,
    source: require('asset/images/wallet/card5.png'),
  },
  {
    id: 6,
    source: require('asset/images/wallet/card6.png'),
  },
];

const Wallet = () => {
  const offsetY = useSharedValue(0);
  const scrollEvent = useAnimatedScrollHandler(e => {
    offsetY.value = e.contentOffset.y;
  });

  return (
    <>
      <Header title="Wallet Animation" />
      <View style={styles.container}>
        <FlatListAnim
          onScroll={scrollEvent}
          renderItem={({item}: any) => {
            return (
              <Card
                source={item.source}
                key={item.id}
                offsetY={offsetY}
                index={item.id}
              />
            );
          }}
          data={LIST_CARD}
        />
        {/* {LIST_CARD.map()} */}
      </View>
    </>
  );
};

export default Wallet;
