import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Stacks/AuthStack';
import {useAuthContext} from '@contexts';
import {AppStack} from './Stacks/AppStack';

export function Routes() {
  const {isAuthenticated} = useAuthContext();

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
