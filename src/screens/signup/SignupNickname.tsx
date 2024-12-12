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

const SignupNicknameScreen = ({navigation}: Readonly<AuthProps>) => {
  const [nickname, setNickname] = useState('');
  const [nicknameStatus, setNicknameStatus] = useState<InputStatus>('default');
  const [nicknameInfo, setNicknameInfo] = useState('');

  const validateNickname = (nickname: string) => {
    if (nickname.length < 2 || nickname.length > 12) {
      return '공백없이 2자 이상 12자 이내로 입력해주세요';
    }
    if (/[^a-zA-Z0-9가-힣]/.test(nickname)) {
      return '특수문자는 사용 불가능해요';
    }
    if (false) {
      return '중복된 닉네임이에요';
    }
    return '';
  };

  const handleNicknameDuplicationCheck = () => {
    const validationMessage = validateNickname(nickname);
    if (validationMessage) {
      setNicknameStatus('warning');
      setNicknameInfo(validationMessage);
      return;
    }

    setNicknameStatus('positive');
    setNicknameInfo('사용 가능한 닉네임이에요');
  };

  const handleNext = () => {
    navigation.navigate('SignupEmailScreen', {nickname});
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
            className="h-[4] bg-primary w-[16%]"
            style={{borderRadius: 8}}
          />
        </View>

        <View className="mt-[104] px-[32]">
          <Txt type="heading1" text="또갈집에 오신걸 환영합니다!" />
          <View className="h-[8]" />
          <Txt type="heading1" text="저희가 어떻게 불러드리면 될까요?" />
          <View className="h-[8]" />
          <Txt
            type="body2"
            text="추후 변경은 1회만 가능해요."
            className="text-gray500"
          />

          <View className="h-[48]" />
          <View className="flex-row items-center">
            <View
              className={`${
                nicknameStatus === 'positive' ? 'flex-[3]' : 'flex-[2.37]'
              }`}>
              <Input
                label="닉네임"
                value={nickname}
                onChangeText={setNickname}
                status={nicknameStatus}
                info={nicknameInfo}
              />
            </View>
            <View className="w-[8]" />
            <View className="flex-1">
              <Btn
                text={nicknameStatus === 'positive' ? '재확인' : '중복 확인'}
                onPress={handleNicknameDuplicationCheck}
                isSmall
                disabled={nickname === ''}
                className={`border ${
                  nicknameStatus === 'positive'
                    ? 'border-gray300 bg-white'
                    : 'border-primary bg-primary'
                }`}
                textStyle={{
                  color: nicknameStatus === 'positive' ? '#575757' : '#191919',
                }}
              />
            </View>
          </View>
        </View>
      </DismissKeyboardView>

      <View className="absolute left-0 bottom-[64] w-full px-[20]">
        <Btn
          text="다음"
          onPress={handleNext}
          disabled={nickname === '' || nicknameStatus !== 'positive'}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupNicknameScreen;
