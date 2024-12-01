import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNav from '@stackNav/Auth';
import AppTabNav from '@tabNav/App';
import RootStackParamList from '@type/nav/RootStackParamList';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Config from 'react-native-config';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppInner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // await AsyncStorage.removeItem('accessToken');
        const token = await AsyncStorage.getItem('accessToken');
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error(error);
        Alert.alert(
          '오류',
          `회원 정보를 불러오는 중 오류가 발생했어요\n${error}`,
        );
      }
    })();
    console.log('AppInner useEffect', Config.API_URL); // undefined
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name="AppTabNav" component={AppTabNav} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="AuthStackNav" component={AuthStackNav} />
          <Stack.Screen name="AppTabNav" component={AppTabNav} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default AppInner;
