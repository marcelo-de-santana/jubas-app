import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ProfileResponse,
  UserPermissionResponse,
  UserProfileResponse,
} from '@domain';
import {
  UserCreateScreen,
  UserListScreen,
  UserUpdateScreen,
  ProfileCreateScreen,
  ProfileListScreen,
  ProfileUpdateScreen,
  ProfileDeleteScreen,
} from '@screens';
import {defaultOptions} from '../../screenOptions';

export type UserStackParamList = {
  UserCreateScreen: undefined;
  UserListScreen: undefined;
  UserUpdateScreen: {user: UserPermissionResponse};
  ProfileListScreen: {user: UserProfileResponse};
  ProfileCreateScreen: {userId: string};
  ProfileUpdateScreen: {userId: string; profile: ProfileResponse};
  ProfileDeleteScreen: {profile: ProfileResponse};
};

const NativeStack = createNativeStackNavigator<UserStackParamList>();

export function UserStack() {
  return (
    <NativeStack.Navigator
      initialRouteName="UserListScreen"
      screenOptions={{...defaultOptions}}>
      <NativeStack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{headerShown: false}}
      />

      <NativeStack.Screen
        name="UserCreateScreen"
        component={UserCreateScreen}
        options={{
          title: 'Novo usuário',
        }}
      />
      <NativeStack.Screen
        name="UserUpdateScreen"
        component={UserUpdateScreen}
        options={{
          title: 'Atualizar usuário',
        }}
      />
      <NativeStack.Screen
        name="ProfileListScreen"
        component={ProfileListScreen}
        options={{headerShown: false}}
      />
      <NativeStack.Screen
        name="ProfileCreateScreen"
        component={ProfileCreateScreen}
        options={{
          title: 'Novo perfil',
        }}
      />
      <NativeStack.Screen
        name="ProfileUpdateScreen"
        component={ProfileUpdateScreen}
        options={{
          title: 'Atualizar perfil',
        }}
      />
      <NativeStack.Screen
        name="ProfileDeleteScreen"
        component={ProfileDeleteScreen}
        options={{
          headerShown: false,
        }}
      />
    </NativeStack.Navigator>
  );
}
