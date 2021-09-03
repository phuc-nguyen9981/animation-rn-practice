import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../Typography';
import {SCREEN_WIDTH} from 'constant/screen';
import useTheming from 'hooks/theming';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';

interface HeaderProps {
  title?: string;
  uppercase?: boolean;
  transparent?: boolean;
  onBack?: () => void;
  actionComponent?: React.Component;
  backEnabled?: boolean;
}

const Header = ({
  backEnabled = true,
  title = '',
  transparent = true,
  uppercase = false,
  onBack = undefined,
  actionComponent,
}: HeaderProps) => {
  const {spacing, colors}: any = useTheming();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          height: spacing(8),
          paddingHorizontal: spacing(2.5),
        },
        transparent && {backgroundColor: `${colors.white}aa`},
      ]}>
      {backEnabled && (
        <Icon
          name={'arrow-back-ios'}
          size={spacing(3.5)}
          onPress={_.isFunction(onBack) ? onBack : () => navigation.goBack()}
        />
      )}
      <Typography variant={'h3'}>
        {uppercase ? title.toLocaleUpperCase() : title}
      </Typography>
      {actionComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    borderColor: '#bababa',
    borderBottomWidth: 1,
    backgroundColor: '#f6f6f6',
    zIndex: 99,
  },
});

export default Header;
