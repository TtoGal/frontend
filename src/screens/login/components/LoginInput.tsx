import {FloatingLabelInput} from 'react-native-floating-label-input';

const LoginInput = ({
  label,
  value,
  onChangeText,
  isPassword,
}: Readonly<{
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
}>) => {
  return (
    <FloatingLabelInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      className="h-[56]"
      customLabelStyles={{
        colorFocused: '#703424',
        fontSizeFocused: 10,
        topFocused: -14,
        colorBlurred: '#703424',
        fontSizeBlurred: 16,
        topBlurred: 0,
      }}
      containerStyles={{
        borderRadius: 16,
        height: 56,
        borderWidth: 1,
        borderColor: '#703424',
        paddingHorizontal: 24,
        backgroundColor: '#FCDE7A',
      }}
      inputStyles={{
        color: '#191919',
        fontSize: 16,
        fontFamily: 'Pretendard-Regular',
        lineHeight: 16 * 1.5,
        position: 'relative',
        top: 4,
      }}
      isPassword={isPassword}
      showPasswordImageStyles={{tintColor: '#703424'}}
    />
  );
};

export default LoginInput;
