import {useTheme, Theme} from '@react-navigation/native';

interface CustomTheme extends Theme {
  spacing?: Function;
}

const useTheming = (): CustomTheme => {
  const theme = useTheme();
  return theme;
};

export default useTheming;
