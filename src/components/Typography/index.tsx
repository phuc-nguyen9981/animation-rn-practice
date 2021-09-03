import React from 'react';
import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import useTheming from 'hooks/theming';

interface TypographyProps {
  variant?: string;
  color?: string;
  light?: boolean;
  bold?: boolean;
  semibold?: boolean;
  italic?: boolean;
  underline?: boolean;
  textAlign?: string;
  style?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  children?: string;
}

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
});

export function fontFamilyBuilder(
  lang: string,
  light: boolean,
  semibold: boolean,
  bold: boolean,
  italic: boolean,
) {
  let fontFamily = '';
  const langMapper: any = {
    // zh: 'NotoSansSC',
    zht: 'NotoSansTC',
    en: 'OpenSans',
  };

  fontFamily = langMapper[lang] || langMapper.en;
  let weightSuffix = '-Regular';

  if (light) {
    weightSuffix = '-Light';
  }

  if (semibold) {
    weightSuffix =
      /* lang === 'zh' || */ lang === 'zht' ? '-Medium' : '-SemiBold';
  }

  if (bold) {
    weightSuffix = '-Bold';
  }

  fontFamily += weightSuffix;

  if (italic && lang === 'en') {
    fontFamily += '-Italic';
  }

  return fontFamily;
}

function Typography({
  variant = 'paragraph1',
  color = 'textPrimary',
  light = false,
  bold = false,
  semibold = false,
  italic = false,
  underline = false,
  textAlign = 'left',
  style = {},
  onPress = () => {},
  children,
}: TypographyProps) {
  const {colors, textStyles}: any = useTheming();

  const fontFamily = fontFamilyBuilder('en', light, semibold, bold, italic);

  if (!children) {
    return null;
  }

  return (
    <Text
      allowFontScaling={false}
      onPress={onPress}
      style={[
        {
          color: colors[color] || colors.textPrimary,
          fontFamily,
        },
        textStyles[variant] || textStyles.paragraph1,
        underline && styles.underline,
        {textAlign},
        style,
      ]}>
      {children}
    </Text>
  );
}

export default Typography;
