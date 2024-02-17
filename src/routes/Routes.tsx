import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Stacks/AuthStack';
import {AppStack} from './Stacks/AppStack';
import {useAuthContext} from '@contexts';

export function Routes() {
  const {isAuthenticated} = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
