import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {useAuthContext} from '@contexts';
import {AppStack} from './AppStack';

export function Routes() {
  const {isAuthenticated} = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
