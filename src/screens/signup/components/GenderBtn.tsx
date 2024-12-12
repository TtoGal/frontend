import Txt from '@components/Txt';
import {GENDER_MAPPING} from '@constants/auth';
import {GenderType} from '@type/api/auth';
import {Pressable, View} from 'react-native';

const GenderBtn = ({
  icon,
  label,
  onPress,
  selectedGender,
}: Readonly<{
  icon: string;
  label: string;
  onPress: () => void;
  selectedGender: GenderType | null;
}>) => {
  return (
    <Pressable
      className={`border h-[92] py-[16] justify-center items-center w-full rounded-brand ${
        label ===
        GENDER_MAPPING.find(({type}) => type === selectedGender)?.label
          ? 'border-primary bg-primary50'
          : 'border-gray300'
      }`}
      onPress={onPress}>
      <Txt type="title2" text={icon} />
      <View className="h-[8]" />
      <Txt type="title2" text={label} className="text-gray700" />
    </Pressable>
  );
};

export default GenderBtn;
