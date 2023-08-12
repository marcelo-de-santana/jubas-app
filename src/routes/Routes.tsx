import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigation} from './NativeStackNavigation';

export function Routes() {
  return (
    <NavigationContainer>
      <NativeStackNavigation />
    </NavigationContainer>
  );
}