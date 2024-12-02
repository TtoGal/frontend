type AuthStackParamList = {
  LoginScreen: undefined;
  SignupEmailScreen: undefined;
  SignupNicknameScreen: {name: string; email: string};
  SignupPasswordScreen: {name: string; email: string; nickname: string};
  SignupJobScreen: {
    name: string;
    email: string;
    nickname: string;
    password: string;
  };
  SignupBirthScreen: {
    name: string;
    email: string;
    nickname: string;
    password: string;
    job: string;
  };
  SignupCompleteScreen: undefined;
};

export default AuthStackParamList;
