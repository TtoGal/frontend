import AppBar from '@components/AppBar';
import Btn from '@components/Btn';
import DismissKeyboardView from '@components/DismissKeyboardView';
import Input, {InputStatus} from '@components/Input';
import Txt from '@components/Txt';
import {GENDER_MAPPING} from '@constants/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import GenderBtn from '@screens/signup/components/GenderBtn';
import {GenderType} from '@type/api/auth';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {Fragment, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignupBirthScreen'
>;

const SignupBirthScreen = ({route, navigation}: Readonly<AuthProps>) => {
  const {nickname, email, password, job} = route.params;
  const [birthday, setBirthday] = useState('');
  const [birthdayStatus, setBirthdayStatus] = useState<InputStatus>('default');
  const [birthdayInfo, setBirthdayInfo] = useState('');
  const [gender, setGender] = useState<GenderType | null>(null);

  const validateBirthday = (birthday: string) => {
    const currentYear = new Date().getFullYear();
    const year = parseInt(birthday, 10);
    if (isNaN(year) || year < 1900 || year > currentYear) {
      return '유효한 출생년도를 입력해주세요';
    }
    return '';
  };

  const handleBirthdayChange = (text: string) => {
    setBirthday(text);
    const validationMessage = validateBirthday(text);
    if (validationMessage) {
      setBirthdayStatus('warning');
      setBirthdayInfo(validationMessage);
    } else {
      setBirthdayStatus('positive');
      setBirthdayInfo('유효한 출생년도입니다');
    }
  };

  const handleSubmit = () => {
    console.log('nickname:', nickname);
    console.log('email:', email);
    console.log('password:', password);
    console.log('job:', job);
    navigation.navigate('SignupCompleteScreen');
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
            className="h-[4] bg-primary w-[80%]"
            style={{borderRadius: 8}}
          />
        </View>

        <View className="mt-[104] px-[20]">
          <Txt type="heading1" text="곧 완료됩니다!" />
          <View className="h-[8]" />
          <Txt type="heading1" text="출생년도와 성별을 알려주세요!" />

          <View className="h-[48]" />
          <Input
            label="출생년도"
            value={birthday}
            onChangeText={handleBirthdayChange}
            status={birthdayStatus}
            info={birthdayInfo}
          />
          <View className="h-[48]" />
          <View className="flex-row justify-between">
            {GENDER_MAPPING.map(({type, label, icon}, index) => (
              <Fragment key={type}>
                {index > 0 && <View className="flex-1" />}
                <View className="flex-[6.8]">
                  <GenderBtn
                    icon={icon}
                    label={label}
                    onPress={() => setGender(type)}
                    selectedGender={gender}
                  />
                </View>
              </Fragment>
            ))}
          </View>
        </View>
      </DismissKeyboardView>

      <View className="absolute left-0 bottom-[64] w-full px-[20]">
        <Btn
          text="다음"
          onPress={handleSubmit}
          disabled={birthday === '' || birthdayStatus === 'warning' || !gender}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupBirthScreen;
