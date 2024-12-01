import AppBar from '@components/AppBar';
import Button from '@components/Button';
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

const SignupEmailScreen = ({navigation}: Readonly<AuthProps>) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
            className="h-[4] bg-darkGray w-[17%]"
            style={{borderRadius: 4}}
          />
        </View>

        <View className="mt-[123] px-[32]">
          <Txt type="title4" text="반가워요!" />
          <View className="h-[8]" />
          <Txt type="body3" text="이름과 이메일을 입력해주세요 :)" />
          <View className="h-[40]" />
          <Input label="이름" value={name} onChangeText={setName} />
          <View className="h-[20]" />
          <Input label="이메일" value={email} onChangeText={setEmail} />
        </View>
      </DismissKeyboardView>

      <View className="absolute left-0 bottom-[47] w-full px-[32]">
        <Button
          text="다음"
          onPress={() => {
            navigation.navigate('SignupNicknameScreen', {name, email});
          }}
          disabled={name === '' || email === ''}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupEmailScreen;
