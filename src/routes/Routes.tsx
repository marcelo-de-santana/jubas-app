import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './Stacks/AuthStack/AuthStack';
import {AppStack} from './Stacks/AppStack/AppStack';
import {useAuthContext} from '@contexts';

export function Routes() {
  const {authCredentials} = useAuthContext();

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
