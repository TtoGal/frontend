import Txt from '@components/Txt';
import {JOB_MAPPING} from '@constants/auth';
import {JobStatus} from '@type/api/auth';
import {Pressable} from 'react-native';

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
      className={`border h-[90] py-[18] justify-center items-center w-[100] ${
        label === JOB_MAPPING.find(({status}) => status === selectedJob)?.label
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

export default JobBtn;
