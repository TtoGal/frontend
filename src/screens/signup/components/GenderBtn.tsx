import Txt from '@components/Txt';
import {GENDER_MAPPING} from '@constants/auth';
import {GenderType} from '@type/api/auth';
import {Pressable} from 'react-native';

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
      className={`border h-[105] py-[22] justify-center items-center w-[117] ${
        label ===
        GENDER_MAPPING.find(({type}) => type === selectedGender)?.label
          ? 'border-darkGray'
          : 'border-lightGray'
      }`}
      style={{borderRadius: 8}}
      onPress={onPress}>
      <Txt type="title2" text={icon} />
      <Txt type="body3" text={label} />
    </Pressable>
  );
};

export default GenderBtn;
