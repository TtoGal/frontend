import Button from '@components/Button';
import {SafeAreaView, Text, View} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-blue-600">LoginScreen</Text>

      <View className="absolute left-0 bottom-[66] w-full px-[32]">
        <Button text="로그인" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
