import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';
import {useAuthContext} from '@contexts';

export function Routes() {
  const {isAuthenticated} = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
