import Button from '@components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AuthStackParamList from '@type/nav/AuthStackParamList';
import {SafeAreaView, Text, View} from 'react-native';

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation}: Readonly<AuthProps>) => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text>또갈집</Text>

      <View className="absolute left-0 bottom-[66] w-full px-[32]">
        <Button
          text="가입하기"
          onPress={() => {
            navigation.navigate('SignupEmailScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
