import Txt from '@components/Txt';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LoginBtn from '@screens/login/components/LoginBtn';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {ImageBackground, SafeAreaView, View} from 'react-native';

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'LoginRegisterScreen'
>;

const LoginRegisterScreen = ({navigation}: Readonly<AuthProps>) => {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require('@assets/images/background.png')}
        className="flex-1 justify-between items-center pt-[24] pb-[64] px-[20]">
        <View className="h-[104]" />

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
          <LoginBtn
            text="또갈집 가입하기"
            onPress={() => {
              navigation.navigate('SignupEmailScreen');
            }}
          />
          <Txt
            type="body2"
            text="이미 계정이 있으신가요?"
            className="text-black py-[13.5] text-center"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginRegisterScreen;
