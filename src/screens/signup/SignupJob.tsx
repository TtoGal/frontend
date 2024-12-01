import AppBar from '@components/AppBar';
import Button from '@components/Button';
import DismissKeyboardView from '@components/DismissKeyboardView';
import Txt from '@components/Txt';
import {JOB_MAPPING} from '@constants/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import JobButton from '@screens/signup/components/JobButton';
import {JobStatus} from '@type/api/auth';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignupEmailScreen'
>;

const SignupJobScreen = ({route, navigation}: Readonly<AuthProps>) => {
  const {name, email, nickname, password} = route.params;
  const [job, setJob] = useState<JobStatus | null>(null);

  return (
    <SafeAreaView className="flex-1">
      <DismissKeyboardView>
        <AppBar
          title="회원가입"
          goBackCallbackFn={() => {
            navigation.goBack();
          }}
          className="absolute top-[0] w-full"
        />
        <View className="absolute top-[83] left-0 w-full px-[32]">
          <View
            className="h-[4] bg-lightGray w-full"
            style={{borderRadius: 4}}
          />
        </View>

        <View className="absolute top-[83] left-0 w-full px-[32]">
          <View
            className="h-[4] bg-darkGray w-[68%]"
            style={{borderRadius: 4}}
          />
        </View>

        <View className="mt-[123] px-[32]">
          <Txt type="title4" text="거의 다 왔어요!" />
          <View className="h-[8]" />
          <Txt
            type="body3"
            text={`${name}님의 현재 상태를 알려주세요! (택 1)`}
          />
          <View className="h-[40]" />

          <View className="flex-row justify-between">
            {JOB_MAPPING.slice(0, 3).map(({status, label, icon}) => (
              <JobButton
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
              <JobButton
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
              <JobButton
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

      <View className="absolute left-0 bottom-[47] w-full px-[32]">
        <Button
          text="다음"
          onPress={() => {
            navigation.navigate('SignupBirthScreen', {
              name,
              email,
              nickname,
              password,
              job: job!,
            });
          }}
          disabled={!job}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupJobScreen;
