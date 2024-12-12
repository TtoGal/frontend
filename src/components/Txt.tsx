import React from 'react';
import {Text, TextStyle} from 'react-native';

type TxtType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'title1'
  | 'title2'
  | 'body1'
  | 'body2'
  | 'label1'
  | 'label2';

type TxtProps = {
  text: string;
  type: TxtType;
  className?: string;
  style?: TextStyle | TextStyle[];
};

const textStyles = {
  // 페이지 단위 타이틀
  heading1: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 24,
    lineHeight: 24 * 1.3,
    letterSpacing: -0.2,
  },
  // 섹션 단위 타이틀
  heading2: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 22,
    lineHeight: 22 * 1.3,
  },
  // 컨테이너 단위 타이틀
  heading3: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    lineHeight: 20 * 1.3,
  },
  // 서브 컨테이너 단위 타이틀
  heading4: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 18,
    lineHeight: 18 * 1.3,
  },

  // 본문 단위 타이틀
  title1: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  // 본문 단위 타이틀
  title2: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },

  // 본문 내용
  body1: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  // 본문 내용
  body2: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    lineHeight: 14 * 1.5,
    letterSpacing: 0.1,
  },

  // 본문 보조 강조
  label1: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 12,
    lineHeight: 12 * 1.3,
    letterSpacing: 0.1,
  },
  // 본분 보조
  label2: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 11,
    lineHeight: 11 * 1.3,
    letterSpacing: 0.2,
  },
};

const Txt = ({text, type, ...props}: TxtProps) => {
  return (
    <Text
      {...props}
      className={`text-black ${props.className}`}
      style={[textStyles[type], props.style]}>
      {text}
    </Text>
  );
};

export default Txt;
