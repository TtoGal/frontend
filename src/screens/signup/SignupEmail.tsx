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
  'SignupEmailScreen'
>;

const SignupEmailScreen = ({route, navigation}: Readonly<AuthProps>) => {
  const {nickname} = route.params;
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<InputStatus>('default');
  const [emailInfo, setEmailInfo] = useState('');
  const [code, setCode] = useState('');
  const [codeStatus, setCodeStatus] = useState<InputStatus>('default');
  const [codeInfo, setCodeInfo] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      return '이메일 양식을 지켜주세요';
    }
    return '';
  };

  const validateCode = (code: string) => {
    return code === '123456';
  };

  const handleEmailCertificationCheck = () => {
    const validationMessage = validateEmail(email);
    if (validationMessage) {
      setEmailStatus('warning');
      setEmailInfo(validationMessage);
      return;
    }

    setEmailStatus('positive');
    setEmailInfo('인증번호를 확인해주세요');
  };

  const handleCodeChange = (code: string) => {
    setCode(code);

    if (!validateCode(code)) {
      setCodeStatus('warning');
      setCodeInfo('인증번호가 맞지 않아요');
      return;
    }

    setCodeStatus('positive');
    setCodeInfo('인증이 완료되었어요');
  };

  const handleCodeSend = () => {};

  const handleNext = () => {
    navigation.navigate('SignupPasswordScreen', {nickname, email});
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
            className="h-[4] bg-primary w-[32%]"
            style={{borderRadius: 8}}
          />
        </View>

        <View className="mt-[104] px-[20]">
          <View className="flex-row items-center">
            <Txt type="heading1" text="반가워요" />
            <Txt
              type="heading1"
              text={` ${nickname}`}
              className="text-primary"
            />
            <Txt type="heading1" text="님!" />
          </View>
          <View className="h-[8]" />
          <Txt type="heading1" text="이메일을 알려주세요" />

          <View className="h-[48]" />
          <View className="flex-row items-center">
            <View
              className={`${
                emailStatus === 'positive' ? 'flex-1' : 'flex-[2.37]'
              }`}>
              <Input
                label="이메일"
                value={email}
                onChangeText={setEmail}
                status={emailStatus}
                info={emailInfo}
              />
            </View>
            {emailStatus !== 'positive' && (
              <>
                <View className="w-[8]" />
                <View className="flex-1">
                  <Btn
                    text="인증하기"
                    onPress={handleEmailCertificationCheck}
                    isSmall
                    disabled={email === ''}
                  />
                </View>
              </>
            )}
          </View>

          {emailStatus === 'positive' && (
            <>
              <View className="h-[50]" />
              <View className="flex-row items-center">
                <View
                  className={`${
                    codeStatus === 'positive' ? 'flex-[2.37]' : 'flex-[3]'
                  }`}>
                  <Input
                    label="6자리 인증번호"
                    value={code}
                    onChangeText={handleCodeChange}
                    status={codeStatus}
                    info={codeInfo}
                  />
                </View>
                <View className="w-[8]" />
                <View className="flex-1">
                  <Btn
                    text={codeStatus === 'positive' ? '인증완료' : '재전송'}
                    onPress={handleCodeSend}
                    isSmall
                    disabled={code === '' || codeStatus === 'positive'}
                    className={`border ${
                      codeStatus === 'positive'
                        ? 'border-gray300 bg-gray300'
                        : 'border-primary bg-primary'
                    }`}
                    textStyle={{
                      color: codeStatus === 'positive' ? 'white' : '#191919',
                    }}
                  />
                </View>
              </View>
            </>
          )}
        </View>
      </DismissKeyboardView>

      <View className="absolute left-0 bottom-[64] w-full px-[20]">
        <Btn
          text="다음"
          onPress={handleNext}
          disabled={
            nickname === '' || email === '' || codeStatus !== 'positive'
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupEmailScreen;
