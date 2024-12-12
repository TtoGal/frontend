import {FloatingLabelInput} from 'react-native-floating-label-input';

const Input = ({
  label,
  value,
  onChangeText,
  hint,
  isPassword,
}: Readonly<{
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  hint: string;
  isPassword?: boolean;
}>) => {
  return (
    <FloatingLabelInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      hint={hint}
      hintTextColor="#939393"
      className="h-[56] border border-gray300"
      labelStyles={{
        color: '#D7D7D7',
        paddingHorizontal: 8,
        backgroundColor: '#FBD341',
      }}
      customLabelStyles={{
        colorFocused: '#D7D7D7',
        colorBlurred: '#D7D7D7',
        fontSizeFocused: 12,
        fontSizeBlurred: 12,
        topFocused: -28,
        topBlurred: -28,
      }}
      containerStyles={{
        borderRadius: 16,
        height: 56,
        borderWidth: 1,
        borderColor: '#D7D7D7',
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
  );
};

export default Input;
