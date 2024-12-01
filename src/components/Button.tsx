import Txt from '@components/Txt';
import LottieView from 'lottie-react-native';
import {Pressable} from 'react-native';

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

const Button = ({
  text,
  onPress,
  disabled,
  isLoading,
}: Readonly<ButtonProps>) => {
  return (
    <Pressable
      className={`h-[56] justify-center items-center flex-row ${
        disabled ? 'bg-lightGray' : 'bg-primary'
      }`}
      style={{borderRadius: 12}}
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
          type="button"
          text={text}
          className={`${disabled ? 'text-darkGray' : 'text-black'}`}
        />
      )}
    </Pressable>
  );
};

export default Button;
