import {FloatingLabelInput} from 'react-native-floating-label-input';

const Input = ({
  label,
  value,
  onChangeText,
}: Readonly<{
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}>) => {
  return (
    <FloatingLabelInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      className="h-[56] border border-lightGray"
      labelStyles={{color: '#9F9F9F'}}
      customLabelStyles={{
        colorFocused: '#9F9F9F',
        colorBlurred: '#9F9F9F',
      }}
      containerStyles={{
        borderRadius: 12,
        height: 56,
        borderWidth: 1,
        borderColor: '#9F9F9F',
        paddingHorizontal: 16,
      }}
      inputStyles={{position: 'relative', top: 4, color: '#4F4F4F'}}
    />
  );
};

export default Input;
