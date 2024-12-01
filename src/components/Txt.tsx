import React from 'react';
import {Text, TextStyle} from 'react-native';

type TxtType =
  | 'title2'
  | 'title4'
  | 'body3'
  | 'body4'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | 'caption4'
  | 'button';

type TxtProps = {
  text: string;
  type: TxtType;
  className?: string;
  style?: TextStyle | TextStyle[];
};

const textStyles = {
  title2: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 26,
    lineHeight: 26 * 1.5,
    letterSpacing: 26 * -0.025,
  },
  title4: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 20,
    lineHeight: 20 * 1.5,
    letterSpacing: 20 * -0.025,
  },
  body3: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 16,
    lineHeight: 16 * 1.5,
    letterSpacing: 16 * -0.025,
  },
  body4: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    lineHeight: 16 * 1.5,
    letterSpacing: 16 * -0.025,
  },
  caption1: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    lineHeight: 14 * 1.5,
    letterSpacing: 14 * -0.025,
  },
  caption2: {
    fontFamily: 'Pretendard-Light',
    fontSize: 14,
    lineHeight: 14 * 1.5,
    letterSpacing: 14 * -0.025,
  },
  caption3: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 12,
    lineHeight: 12 * 1.5,
    letterSpacing: 12 * -0.025,
  },
  caption4: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 10,
    lineHeight: 10 * 1.5,
    letterSpacing: 10 * -0.025,
  },
  button: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    lineHeight: 16 * 1.5,
    letterSpacing: 16 * -0.025,
  },
};

const Txt = ({text, type, ...props}: TxtProps) => {
  return (
    <Text
      {...props}
      className={props.className}
      style={[textStyles[type], props.style]}>
      {text}
    </Text>
  );
};

export default Txt;
