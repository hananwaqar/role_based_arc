/**
 * Font Family
 * * If font weight less then equal to 400 ==> Normal(Regular)
 * * 500 equals ====> Medium
 * * 600 equals ====> Medium
 * * greater or equal to 700 ====> Bold
 */

const fontsFamily = {
  inter: {
    heading: 'Inter-Black',
    subHeading: 'Inter-Bold',
    subTitle: 'Inter-Medium',
    body: 'Inter-Regular',
    bullets: 'Inter-Light',
    sources: 'Inter-Italic',
  },
};

const fontFace = fontsFamily.inter;

type fontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface IFontWeight {
  hairline: fontWeightType;
  ultraLight: fontWeightType;
  thin: fontWeightType;
  light: fontWeightType;
  regular: fontWeightType;
  medium: fontWeightType;
  semiBold: fontWeightType;
  extraBold: fontWeightType;
  ultraBold: fontWeightType;
  bold: fontWeightType;
}

const fontWeight: IFontWeight = {
  hairline: '100',
  ultraLight: '200',
  thin: '300',
  light: '400',
  regular: '500',
  medium: '600',
  semiBold: '700',
  extraBold: '800',
  ultraBold: '900',
  bold: 'bold',
};
const fontSize = {
  small: 10,
  extraSmall: 12,
  smallMedium: 14,
  medium: 16,
  mediumLarge: 18,
  large: 20,
  extraLarge: 22,
  doubleExtraLarge: 24,
  f26: 26,
  f32: 32,
  f36: 36,
  f48: 48,
  f28: 28,
};

export type IFonts = {
  fontFace: typeof fontFace;
  fontWeight: IFontWeight;
  fontSize: typeof fontSize;
};

export const fonts: IFonts = {
  fontFace,
  fontWeight,
  fontSize,
};
