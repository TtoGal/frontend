import Txt from '@components/Txt';
import {View} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';

export type InputStatus = 'default' | 'positive' | 'warning';

const Input = ({
  label,
  value,
  onChangeText,
  isPassword,
  status = 'default',
  info = '',
}: Readonly<{
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  status?: InputStatus;
  info?: string;
}>) => {
  const statusStyles = {
    default: {
      color: '#D7D7D7',
    },
    positive: {
      color: '#4CAF50',
    },
    warning: {
      color: '#E53935',
    },
  };

  return (
    <View className="relative">
      <FloatingLabelInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        className="h-[56]"
        labelStyles={{
          color: statusStyles[status].color,
          paddingHorizontal: 8,
          backgroundColor: 'white',
        }}
        customLabelStyles={{
          colorFocused: statusStyles[status].color,
          fontSizeFocused: 12,
          topFocused: -28,
          colorBlurred: statusStyles[status].color,
          fontSizeBlurred: 16,
          topBlurred: 0,
        }}
        containerStyles={{
          borderRadius: 16,
          height: 56,
          borderWidth: 1,
          borderColor: statusStyles[status].color,
          paddingHorizontal: 24,
        }}
        inputStyles={{
          color: '#191919',
          fontSize: 16,
          fontFamily: 'Pretendard-Regular',
          lineHeight: 16 * 1.5,
        }}
        isPassword={isPassword}
        showPasswordImageStyles={{tintColor: '#D7D7D7'}}
      />
      {info !== '' && (
        <Txt
          type="label2"
          text={info}
          className="pl-[24] absolute bottom-[-20] w-full"
          style={{color: statusStyles[status].color}}
        />
      )}
    </View>
  );
};

export default Input;
