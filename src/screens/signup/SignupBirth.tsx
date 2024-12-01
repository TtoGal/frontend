import AppBar from '@components/AppBar';
import Button from '@components/Button';
import DismissKeyboardView from '@components/DismissKeyboardView';
import Input from '@components/Input';
import Txt from '@components/Txt';
import {GENDER_MAPPING} from '@constants/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import GenderButton from '@screens/signup/components/GenderButton';
import {GenderType} from '@type/api/auth';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignupEmailScreen'
>;

const SignupBirthScreen = ({route, navigation}: Readonly<AuthProps>) => {
  const {name, email, nickname, password, job} = route.params;
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState<GenderType | null>(null);

  const handleSubmit = () => {
    console.log('name:', name);
    console.log('email:', email);
    console.log('nickname:', nickname);
    console.log('password:', password);
    console.log('job:', job);
    navigation.navigate('SignupCompleteScreen');
  };

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
            className="h-[4] bg-darkGray w-[85%]"
            style={{borderRadius: 4}}
          />
        </View>

        <View className="mt-[123] px-[32]">
          <Txt type="title4" text="곧 완료됩니다!" />
          <View className="h-[8]" />
          <Txt
            type="body3"
            text={`${name}님의 출생년도와 성별을 알려주세요!`}
          />
          <View className="h-[40]" />

          <Input label="출생년도" value={birthday} onChangeText={setBirthday} />
          <View className="h-[40]" />
          <View className="flex-row justify-around">
            {GENDER_MAPPING.map(({type, label, icon}) => (
              <GenderButton
                key={type}
                icon={icon}
                label={label}
                onPress={() => setGender(type)}
                selectedGender={gender}
              />
            ))}
          </View>
        </View>
      </DismissKeyboardView>

      <View className="absolute left-0 bottom-[47] w-full px-[32]">
        <Button
          text="다음"
          onPress={handleSubmit}
          disabled={birthday === '' || !gender}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupBirthScreen;
