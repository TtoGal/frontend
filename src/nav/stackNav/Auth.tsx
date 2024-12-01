import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login';
import AuthStackParamList from '@type/nav/AuthStackParamList';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
