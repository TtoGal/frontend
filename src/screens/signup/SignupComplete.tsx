import AppBar from '@components/AppBar';
import Button from '@components/Button';
import Txt from '@components/Txt';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '@type/nav/RootStackParamList';
import {SafeAreaView, View} from 'react-native';

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
      <View className="absolute top-[83] left-0 w-full px-[32]">
        <View className="h-[4] bg-lightGray w-full" style={{borderRadius: 4}} />
      </View>

      <View className="absolute top-[83] left-0 w-full px-[32]">
        <View
          className="h-[4] bg-darkGray w-[100%]"
          style={{borderRadius: 4}}
        />
      </View>

      <Txt type="title2" text="🥳" style={{fontSize: 55, padding: 30}} />
      {/* <View className="h-[15]" /> */}
      <Txt type="title2" text="가입을 축하합니다!" />
      <View className="h-[25]" />
      <Txt
        type="body3"
        text={'온보딩 화면을 통해\n앱 사용 방법을 간단히 알아보세요!'}
        className="text-center"
      />
      <View className="h-[40]" />

      <View className="absolute left-0 bottom-[47] w-full px-[32]">
        <Txt
          type="caption1"
          text="그냥 바로 이용할래요"
          className="underline text-center text-darkGray"
        />
        <View className="h-[9]" />
        <Button
          text="온보딩으로 이동"
          onPress={() => navigation.navigate('AppTabNav')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupCompleteScreen;
