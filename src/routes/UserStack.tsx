import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileRequestDTO, UserRequestDTO, UserResponseDTO} from '@repositories';
import {
  UserCreateScreen,
  UserListScreen,
  UserProfileScreen,
  UserProfileUpdateScreen,
  UserUpdateScreen,
} from '@screens';

export type UserStackParamList = {
  UserListScreen: undefined;
  UserCreateScreen: undefined;
  UserUpdateScreen: {user: UserRequestDTO};
  UserProfileScreen: {user: UserRequestDTO};
  UserProfileCreateScreen: undefined;
  UserProfileUpdateScreen: {
    profile: ProfileRequestDTO;
  };
};

const NativeStack = createNativeStackNavigator<UserStackParamList>();

export function UserStack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTintColor: '#3C4659',
        headerTitleAlign: 'center',
      }}
      initialRouteName="UserListScreen">
      <NativeStack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{title: 'Usuários', headerShown: true}}
      />
      <NativeStack.Screen
        name="UserCreateScreen"
        component={UserCreateScreen}
        options={{
          animation: 'fade_from_bottom',
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="UserUpdateScreen"
        component={UserUpdateScreen}
        options={{
          animation: 'fade_from_bottom',
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          title: 'Detalhes',
          headerShown: true,
          animation: 'slide_from_right',
        }}
      />
      <NativeStack.Screen
        name="UserProfileUpdateScreen"
        component={UserProfileUpdateScreen}
        options={{
          title: 'Detalhes',
          animation: 'fade_from_bottom',
          presentation: 'transparentModal',
        }}
      />
    </NativeStack.Navigator>
  );
}
