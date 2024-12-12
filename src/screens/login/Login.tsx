import Txt from '@components/Txt';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LoginBtn from '@screens/login/components/LoginBtn';
import LoginInput from '@screens/login/components/LoginInput';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {useState} from 'react';
import {ImageBackground, Pressable, SafeAreaView, View} from 'react-native';

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation}: Readonly<AuthProps>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require('@assets/images/background.png')}
        className="flex-1 justify-between items-center pt-[24] pb-[64] px-[20]">
        <View className="h-[216]" />

        <View>
          <Txt
            type="heading1"
            text="또갈집에 오신걸 환영합니다!"
            className="text-center"
          />
          <View className="h-[8]" />
          <Txt
            type="body1"
            text="카드 수집형 맛집 탐색을 경험해 보세요"
            className="text-center"
          />
        </View>

        <View className="w-full">
          <LoginInput
            label="이메일을 입력해 주세요"
            value={email}
            onChangeText={setEmail}
          />
          <View className="h-[24]" />
          <LoginInput
            label="비밀번호를 입력해 주세요"
            value={password}
            onChangeText={setPassword}
            isPassword
          />
          <View className="h-[24]" />
          <LoginBtn
            text="로그인"
            onPress={() => {
              navigation.navigate('SignupEmailScreen');
            }}
          />
          <Pressable onPress={() => navigation.navigate('LoginRegisterScreen')}>
            <Txt
              type="body2"
              text="또갈집 가입하기"
              className="text-black py-[13.5] text-center"
            />
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
