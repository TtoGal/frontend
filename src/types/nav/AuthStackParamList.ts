type AuthStackParamList = {
  LoginRegisterScreen: undefined;
  LoginScreen: undefined;
  SignupNicknameScreen: undefined;
  SignupEmailScreen: {nickname: string};
  SignupPasswordScreen: {nickname: string; email: string};
  SignupJobScreen: {
    nickname: string;
    email: string;
    password: string;
  };
  SignupBirthScreen: {
    nickname: string;
    email: string;
    password: string;
    job: string;
  };
  SignupCompleteScreen: undefined;
};

export default AuthStackParamList;
