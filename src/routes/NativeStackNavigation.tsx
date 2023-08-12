import {HomeScreen} from '@screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeStackParamList } from './typesRoute/TypeNativeStack';

const NativeStack = createNativeStackNavigator<NativeStackParamList>();

export function NativeStackNavigation() {
  return (
    <NativeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <NativeStack.Screen name="HomeScreen" component={HomeScreen} />
    </NativeStack.Navigator>
  );
}
