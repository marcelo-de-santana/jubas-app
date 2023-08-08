import MainScreen from '../screens/MainScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3C4659',
        },
        headerTintColor: '#fff',
      }}
      initialRouteName="Login">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerTitle: 'Jubas Barbearia', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}
