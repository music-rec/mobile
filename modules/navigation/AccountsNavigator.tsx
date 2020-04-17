import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from 'app/modules/accounts/AuthScreen';
import SignUpScreen from 'app/modules/accounts/SignUpScreen';
import SignInScreen from 'app/modules/accounts/SignInScreen';
import ResetPasswordScreen from 'app/modules/accounts/ResetPasswordScreen';
import UpdatePasswordScreen from 'app/modules/accounts/UpdatePasswordScreen';

const AccountsNavigator = createStackNavigator({
  AuthScreen: {
    screen: AuthScreen as any,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
    path: ``,
  },
  SignUp: {
    screen: SignUpScreen as any,
    path: `sign-up`,
  },
  SignIn: {
    screen: SignInScreen,
    path: `sign-in`,
  },
  ResetPassword: {
    screen: ResetPasswordScreen as any,
    path: `reset-password`,
  },
  UpdatePassword: {
    screen: UpdatePasswordScreen as any,
    path: `update-password`,
  },
});

export default AccountsNavigator;
