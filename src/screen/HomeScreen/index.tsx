import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HomeMenuItem from 'components/HomeMenuItem';
import Header from 'components/Header';
import {useNavigation} from '@react-navigation/native';
import {LIST_SCREEN} from 'constant/navigation';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title={'Animation Module'} backEnabled={false} />
      <ScrollView contentContainerStyle={[styles.scrollViewContainer]}>
        {LIST_SCREEN.map((screen, index) =>
          screen.isMenu ? (
            <HomeMenuItem
              key={index}
              title={screen.title}
              onClick={() => {
                navigation.navigate(screen.screenName);
              }}
            />
          ) : null,
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
});
export default HomeScreen;
