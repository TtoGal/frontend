import AppBar from '@components/AppBar';
import Btn from '@components/Btn';
import DismissKeyboardView from '@components/DismissKeyboardView';
import Txt from '@components/Txt';
import {JOB_MAPPING} from '@constants/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import JobBtn from '@screens/signup/components/JobBtn';
import {JobStatus} from '@type/api/auth';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'SignupJobScreen'>;

const SignupJobScreen = ({route, navigation}: Readonly<AuthProps>) => {
  const {nickname, email, password} = route.params;
  const [job, setJob] = useState<JobStatus | null>(null);

  const handleNext = () => {
    navigation.navigate('SignupBirthScreen', {
      nickname,
      email,
      password,
      job: job!,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DismissKeyboardView>
        <AppBar
          title="회원가입"
          goBackCallbackFn={() => {
            navigation.goBack();
          }}
          className="absolute top-[0] w-full"
        />
        <View className="absolute top-[64] left-0 w-full">
          <View className="h-[4] bg-gray100 w-full" style={{borderRadius: 8}} />
        </View>
        <View className="absolute top-[64] left-0 w-full">
          <View
            className="h-[4] bg-primary w-[64%]"
            style={{borderRadius: 8}}
          />
        </View>

        <View className="mt-[104] px-[20]">
          <Txt type="heading1" text="거의 다 왔어요!" />
          <View className="h-[8]" />
          <View className="flex-row items-center">
            <Txt type="heading1" text={nickname} className="text-tertiary" />
            <Txt type="heading1" text="님의 현재 상태를 알려주세요" />
          </View>
          <View className="h-[8]" />
          <Txt type="body2" text="보기 중 택1" className="text-gray500" />

          <View className="h-[48]" />
          <View className="flex-row justify-between">
            {JOB_MAPPING.slice(0, 3).map(({status, label, icon}) => (
              <JobBtn
                key={status}
                icon={icon}
                label={label}
                onPress={() => setJob(status)}
                selectedJob={job}
              />
            ))}
          </View>
          <View className="h-[20]" />
          <View className="flex-row justify-between">
            {JOB_MAPPING.slice(3, 6).map(({status, label, icon}) => (
              <JobBtn
                key={status}
                icon={icon}
                label={label}
                onPress={() => setJob(status)}
                selectedJob={job}
              />
            ))}
          </View>
          <View className="h-[20]" />
          <View className="flex-row justify-between">
            {JOB_MAPPING.slice(6).map(({status, label, icon}) => (
              <JobBtn
                key={status}
                icon={icon}
                label={label}
                onPress={() => setJob(status)}
                selectedJob={job}
              />
            ))}
          </View>
        </View>
      </DismissKeyboardView>

      <View className="absolute left-0 bottom-[64] w-full px-[20]">
        <Btn text="다음" onPress={handleNext} disabled={!job} />
      </View>
    </SafeAreaView>
  );
};

export default SignupJobScreen;
