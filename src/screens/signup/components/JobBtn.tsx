import Txt from '@components/Txt';
import {JOB_MAPPING} from '@constants/auth';
import {JobStatus} from '@type/api/auth';
import {Pressable, View} from 'react-native';

const JobBtn = ({
  icon,
  label,
  onPress,
  selectedJob,
}: Readonly<{
  icon: string;
  label: string;
  onPress: () => void;
  selectedJob: JobStatus | null;
}>) => {
  return (
    <Pressable
      className={`border h-[92] py-[18] justify-center items-center w-[106] rounded-brand ${
        label === JOB_MAPPING.find(({status}) => status === selectedJob)?.label
          ? 'border-primary bg-primary50'
          : 'border-gray300'
      }`}
      onPress={onPress}>
      <Txt type="heading1" text={icon} />
      <View className="h-[8]" />
      <Txt type="title2" text={label} className="text-gray700" />
    </Pressable>
  );
};

export default JobBtn;
