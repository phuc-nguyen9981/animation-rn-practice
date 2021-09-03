import Header from 'components/Header';
import useTheming from 'hooks/theming';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TinderCard from './TinderCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    position: 'absolute',
    // alignSelf: 'center',
    left: 0,
    right: 0,
  },
});

const listCard = [
  {
    name: 'Angela',
    age: 21,
    avatar: require('./asset/tinder-img-01.jpg'),
  },
  {
    name: 'Angela',
    age: 21,
    avatar: require('./asset/tinder-img-02.jpg'),
  },
  {
    name: 'Angela',
    age: 21,
    avatar: require('./asset/tinder-img-03.jpg'),
  },
  {
    name: 'Angela',
    age: 21,
    avatar: require('./asset/tinder-img-04.jpg'),
  },
  {
    name: 'Angela',
    age: 21,
    avatar: require('./asset/tinder-img-05.jpg'),
  },
  {
    name: 'Angela',
    age: 21,
    avatar: require('./asset/tinder-img-06.jpg'),
  },
];

const TinderSwipe = () => {
  const {spacing}: any = useTheming();
  return (
    <View style={styles.container}>
      <Header title={'Tinder Swipe'} />
      {listCard.map((card, index) => (
        <TinderCard
          key={index}
          name={card.name}
          age={card.age}
          avatar={card.avatar}
          style={{...styles.card, top: spacing(8)}}
        />
      ))}
    </View>
  );
};

export default TinderSwipe;
