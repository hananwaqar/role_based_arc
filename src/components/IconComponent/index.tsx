import React from 'react';
import { SvgXml } from 'react-native-svg';

export const IconComponent = props => {
  const { icon, color, iconStyle, style, fillColor } = props;

  return (
    <SvgXml
      xml={icon}
      height={iconStyle?.height || 28}
      color={color}
      fill={fillColor ? (color ? color : iconStyle?.color) : 'transparent'}
      width={iconStyle?.width || 28}
      style={style}
    />
  );
};
