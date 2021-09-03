import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {SCREEN_WIDTH} from 'constant/screen';
import useTheming from 'hooks/theming';
import Divider from 'components/Divider';

interface HomeMenuItemProps {
  title?: string;
  onClick?: (event: GestureResponderEvent) => void;
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,

    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',

    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
});

const HomeMenuItem = ({title = '', onClick = () => {}}: HomeMenuItemProps) => {
  const {spacing, colors}: any = useTheming();

  return (
    <>
      <TouchableOpacity
        accessibilityIgnoresInvertColors
        style={[
          styles.container,
          {
            height: spacing(8),
            paddingHorizontal: spacing(3),
          },
        ]}
        onPress={onClick}>
        <Text>{title}</Text>
        <Icon
          name={'arrow-forward-ios'}
          size={spacing(2)}
          color={colors.primary}
        />
      </TouchableOpacity>
      <Divider />
    </>
  );
};

export default HomeMenuItem;
