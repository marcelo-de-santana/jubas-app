import {NativeStackScreenProps, createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,

} from '@screens';

export type NativeStackProps = NativeStackScreenProps<NativeStackParamList>;

export type NativeStackParamList = {
  HomeScreen: undefined;
};

const NativeStack = createNativeStackNavigator<NativeStackParamList>();

export function AppStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3C4659',
        },
        headerTintColor: '#fff',
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <NativeStack.Screen name="HomeScreen" component={HomeScreen} />
    </NativeStack.Navigator>
  );
}
