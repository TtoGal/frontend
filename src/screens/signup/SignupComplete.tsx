import AppBar from '@components/AppBar';
import Btn from '@components/Btn';
import Txt from '@components/Txt';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '@type/nav/RootStackParamList';
import LottieView from 'lottie-react-native';
import {Pressable, SafeAreaView, View} from 'react-native';

type RootProps = NativeStackScreenProps<RootStackParamList>;

const SignupCompleteScreen = ({navigation}: Readonly<RootProps>) => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
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
        <View className="h-[4] bg-primary w-[100%]" style={{borderRadius: 8}} />
      </View>

      <View className="mt-[-50]" />

      <LottieView
        style={{
          width: 150,
          height: 150,
        }}
        source={require('@assets/lotties/emotion.lottie')}
        autoPlay
        loop
      />
      <View className="h-[24]" />
      <Txt type="heading1" text="가입을 축하합니다!" />
      <View className="h-[24]" />
      <Txt
        type="body1"
        text={'온보딩 화면을 통해\n앱 사용 방법을 간단히 알아보세요!'}
        className="text-center text-gray700"
      />
      <View className="h-[40]" />

      <View className="absolute left-0 bottom-[64] w-full px-[20]">
        <Pressable onPress={() => navigation.navigate('AppTabNav')}>
          <Txt
            type="body2"
            text="그냥 바로 이용할래요"
            className="text-black py-[13.5] text-center underline"
          />
        </Pressable>
        <Btn
          text="온보딩으로 이동"
          onPress={() => navigation.navigate('AppTabNav')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupCompleteScreen;
