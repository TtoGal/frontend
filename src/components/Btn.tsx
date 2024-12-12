import Txt from '@components/Txt';
import LottieView from 'lottie-react-native';
import {Pressable, TextStyle, ViewStyle} from 'react-native';

type BtnProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  isSmall?: boolean;
  className?: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
};

const Btn = ({
  text,
  onPress,
  disabled,
  isLoading,
  isSmall,
  className,
  style,
  textStyle,
}: Readonly<BtnProps>) => {
  return (
    <Pressable
      className={`h-[56] justify-center items-center flex-row ${
        isSmall ? 'px-[16]' : 'px-[24]'
      } rounded-brand ${disabled ? 'bg-gray300' : 'bg-primary'} ${className}`}
      style={style}
      onPress={onPress}
      disabled={disabled}>
      {isLoading ? (
        <LottieView
          style={{
            width: 240,
            height: 240,
          }}
          source={require('@assets/lotties/loading-pacman.lottie')}
          autoPlay
          loop
        />
      ) : (
        <Txt
          type={isSmall ? 'body1' : 'title1'}
          text={text}
          className={`${disabled ? 'text-white' : 'text-gray900'}`}
          style={textStyle}
        />
      )}
    </Pressable>
  );
};

export default Btn;
