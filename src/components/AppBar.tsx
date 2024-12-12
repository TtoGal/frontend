import {Pressable, View, ViewStyle} from 'react-native';
import BackIcon from '@assets/images/back.svg';
import Txt from '@components/Txt';

type AppBarProps = {
  title?: string;
  goBackCallbackFn?: () => void;
  exitCallbackFn?: () => void;
  className?: string;
  style?: ViewStyle | ViewStyle[];
};

const AppBar = ({
  title,
  goBackCallbackFn,
  exitCallbackFn,
  ...props
}: Readonly<AppBarProps>) => {
  return (
    <View
      {...props}
      className={`h-[64] flex-row items-center justify-between px-[20] border-b border-b-white/5 ${props.className}`}
      style={props.style}>
      {goBackCallbackFn ? (
        <Pressable className="flex-1 py-[18]" onPress={goBackCallbackFn}>
          <BackIcon />
        </Pressable>
      ) : (
        <View className="flex-1" />
      )}
      {title ? (
        <Txt
          type="heading2"
          text={title}
          className="text-center flex-1 py-[18]"
        />
      ) : (
        <View className="flex-1" />
      )}
      {exitCallbackFn ? (
        <Pressable
          className="flex-1 py-[18] flex-row justify-end"
          onPress={exitCallbackFn}>
          <BackIcon />
        </Pressable>
      ) : (
        <View className="flex-1" />
      )}
    </View>
  );
};

export default AppBar;
