import AppBar from '@components/AppBar';
import Btn from '@components/Btn';
import DismissKeyboardView from '@components/DismissKeyboardView';
import Input, {InputStatus} from '@components/Input';
import Txt from '@components/Txt';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignupPasswordScreen'
>;

const SignupPasswordScreen = ({route, navigation}: Readonly<AuthProps>) => {
  const {nickname, email} = route.params;
  const [password, setPassword] = useState('');
  const [passwordStatus, setPasswordStatus] = useState<InputStatus>('default');
  const [passwordInfo, setPasswordInfo] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckStatus, setPasswordCheckStatus] =
    useState<InputStatus>('default');
  const [passwordCheckInfo, setPasswordCheckInfo] = useState('');
  const [isPasswordSame, setIsPasswordSame] = useState(false);

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNoSpaces = !/\s/.test(password);

    const isValid =
      hasNoSpaces &&
      ((hasUpperCase && hasLowerCase) ||
        (hasUpperCase && hasNumber) ||
        (hasUpperCase && hasSpecialChar) ||
        (hasLowerCase && hasNumber) ||
        (hasLowerCase && hasSpecialChar) ||
        (hasNumber && hasSpecialChar));

    if (!hasNoSpaces) {
      return '공백은 불가능해요';
    }
    if (!isValid) {
      return '영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합';
    }
    return '';
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);

    const validationMessage = validatePassword(text);
    if (validationMessage) {
      setPasswordStatus('warning');
      setPasswordInfo(validationMessage);
    } else {
      setPasswordStatus('positive');
      setPasswordInfo('사용 가능한 비밀번호에요');
    }

    if (passwordCheck && text !== passwordCheck) {
      setPasswordCheckStatus('warning');
      setPasswordCheckInfo('비밀번호와 맞지 않아요');
    }

    setIsPasswordSame(text === passwordCheck);
  };

  const handlePasswordCheckChange = (text: string) => {
    setPasswordCheck(text);

    if (text === password) {
      setPasswordCheckStatus('positive');
      setPasswordCheckInfo('확인되었습니다!');
    } else {
      setPasswordCheckStatus('warning');
      setPasswordCheckInfo('비밀번호와 맞지 않아요');
    }
    setIsPasswordSame(text === password);
  };

  const handleNext = () => {
    navigation.navigate('SignupJobScreen', {
      nickname,
      email,
      password,
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
            className="h-[4] bg-primary w-[48%]"
            style={{borderRadius: 8}}
          />
        </View>

        <View className="mt-[104] px-[20]">
          <Txt type="heading1" text="순조롭게 진행 중이에요!" />
          <View className="h-[8]" />
          <Txt type="heading1" text="비밀번호를 설정해주세요 :)" />

          <View className="h-[48]" />
          <Input
            label="비밀번호"
            value={password}
            onChangeText={handlePasswordChange}
            status={passwordStatus}
            info={passwordInfo}
            isPassword
          />
          <View className="h-[50]" />
          <Input
            label="비밀번호 재입력"
            value={passwordCheck}
            onChangeText={handlePasswordCheckChange}
            status={passwordCheckStatus}
            info={passwordCheckInfo}
            isPassword
          />
        </View>
      </DismissKeyboardView>

      <View className="absolute left-0 bottom-[64] w-full px-[20]">
        <Btn
          text="다음"
          onPress={handleNext}
          disabled={
            password === '' ||
            passwordCheck === '' ||
            !isPasswordSame ||
            passwordStatus === 'warning' ||
            passwordCheckStatus === 'warning'
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupPasswordScreen;
