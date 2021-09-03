import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

interface Props {}
export interface iItem {
  id: number;
  title: string;
  source: ImageSourcePropType;
}
const ITEMS: iItem[] = [
  {
    id: 1,
    title: 'Naruto',
    source: require('./asset/naruto.png'),
  },
  {
    id: 2,
    title: 'Sasuke',
    source: require('./asset/sasuke.png'),
  },
  {
    id: 3,
    title: 'Sakura',
    source: require('./asset/sakura.png'),
  },
  {
    id: 4,
    title: 'Kakashi',
    source: require('./asset/kakashi.png'),
  },
  {
    id: 5,
    title: 'Obito',
    source: require('./asset/obito.png'),
  },
  {
    id: 6,
    title: 'Itachi',
    source: require('./asset/itachi.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 20,
  },
});

const SharedElementBasic = ({}) => {
  const navigate = useNavigation();
  const navigateToDetail = (item: iItem) => {
    navigate.navigate('SharedElementsDetail', {item});
  };

  const renderItem: ListRenderItem<iItem> = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetail(item)}>
        <SharedElement id={`${item.id}.image`}>
          <Image source={item.source} style={styles.image} />
        </SharedElement>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ITEMS}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SharedElementBasic;
