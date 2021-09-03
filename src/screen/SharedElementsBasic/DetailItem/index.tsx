import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {iItem} from '..';

interface Props {
  item: iItem;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
});
const DetailItem = ({}) => {
  const route: RouteProp<{params: {item: iItem}}, 'params'> = useRoute();
  const {item}: {item: iItem} = route.params;

  return (
    <>
      <SharedElement id={`${item.id}.image`}>
        <Image source={item.source} style={styles.image} />
      </SharedElement>
      <ScrollView>
        {new Array(50).fill(item.title).map((i, index) => (
          <Text key={index}>{i}</Text>
        ))}
      </ScrollView>
    </>
  );
};

DetailItem.sharedElements = (
  route: RouteProp<{params: {item: iItem}}, 'params'>,
) => {
  console.log({route});
  const {item} = route.params;
  return [`${item.id}.image`];
};

export default DetailItem;
