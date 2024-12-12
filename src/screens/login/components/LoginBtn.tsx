import Txt from '@components/Txt';
import LottieView from 'lottie-react-native';
import {Pressable} from 'react-native';

type BtnProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

const LoginBtn = ({text, onPress, disabled, isLoading}: Readonly<BtnProps>) => {
  return (
    <Pressable
      className={`h-[56] justify-center items-center flex-row px-[24] rounded-brand ${
        disabled ? 'bg-gray300' : 'bg-secondary'
      }`}
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
        <Txt type="title1" text={text} className="text-white" />
      )}
    </Pressable>
  );
};

export default LoginBtn;
