import AppBar from '@components/AppBar';
import Btn from '@components/Btn';
import DismissKeyboardView from '@components/DismissKeyboardView';
import Input from '@components/Input';
import Txt from '@components/Txt';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignupEmailScreen'
>;

const SignupPasswordScreen = ({route, navigation}: Readonly<AuthProps>) => {
  const {name, email, nickname} = route.params;
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isPasswordSame, setIsPasswordSame] = useState(false);

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
            className="h-[4] bg-darkGray w-[51%]"
            style={{borderRadius: 4}}
          />
        </View>

        <View className="mt-[123] px-[32]">
          <Txt type="title4" text="순조롭게 진행 중이에요!" />
          <View className="h-[8]" />
          <Txt type="body3" text="비밀번호를 설정해주세요 :)" />
          <View className="h-[2]" />
          <Txt
            type="caption1"
            text="추후 변경은 1회만 가능해요."
            className="text-darkGray"
          />
          <View className="h-[40]" />
          <Input
            label="비밀번호"
            value={password}
            onChangeText={text => {
              setPassword(text);
              setIsPasswordSame(text === passwordCheck);
            }}
            isPassword
          />
          <View className="h-[20]" />
          <Input
            label="비밀번호 확인"
            value={passwordCheck}
            onChangeText={text => {
              setPasswordCheck(text);
              setIsPasswordSame(text === password);
            }}
            isPassword
          />
        </View>
      </DismissKeyboardView>

      <View className="absolute left-0 bottom-[47] w-full px-[32]">
        <Btn
          text="다음"
          onPress={() => {
            navigation.navigate('SignupJobScreen', {
              name,
              email,
              nickname,
              password,
            });
          }}
          disabled={password === '' || passwordCheck === '' || !isPasswordSame}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupPasswordScreen;
