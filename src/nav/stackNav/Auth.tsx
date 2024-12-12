import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/login/Login';
import LoginRegisterScreen from '@screens/login/LoginRegister';
import SignupBirthScreen from '@screens/signup/SignupBirth';
import SignupCompleteScreen from '@screens/signup/SignupComplete';
import SignupEmailScreen from '@screens/signup/SignupEmail';
import SignupJobScreen from '@screens/signup/SignupJob';
import SignupNicknameScreen from '@screens/signup/SignupNickname';
import SignupPasswordScreen from '@screens/signup/SignupPassword';
import AuthStackParamList from '@type/nav/AuthStackParamList';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="LoginRegisterScreen"
        component={LoginRegisterScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupEmailScreen" component={SignupEmailScreen} />
      <Stack.Screen
        name="SignupNicknameScreen"
        component={SignupNicknameScreen}
      />
      <Stack.Screen
        name="SignupPasswordScreen"
        component={SignupPasswordScreen}
      />
      <Stack.Screen name="SignupJobScreen" component={SignupJobScreen} />
      <Stack.Screen name="SignupBirthScreen" component={SignupBirthScreen} />
      <Stack.Screen
        name="SignupCompleteScreen"
        component={SignupCompleteScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
