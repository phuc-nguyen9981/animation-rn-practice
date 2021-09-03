import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WINDOW_HEIGHT} from 'constant/screen';
import useTheming from 'hooks/theming';

const styles = StyleSheet.create({
  divider: {
    position: 'relative',
  },
});

const Divider = ({width = WINDOW_HEIGHT}) => {
  const {colors}: any = useTheming();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={[
        styles.divider,
        {width, height: 1, backgroundColor: colors.secondary},
      ]}
    />
  );
};

export default Divider;
