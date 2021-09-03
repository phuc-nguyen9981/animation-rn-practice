import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import HomeScreen from '../screen/HomeScreen';

import {LIST_SCREEN} from 'constant/navigation';

const Stack = createSharedElementStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'} headerMode={'none'}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      {LIST_SCREEN.map((screen, index) => {
        return (
          <Stack.Screen
            key={index}
            name={screen.screenName}
            component={screen.screen}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
