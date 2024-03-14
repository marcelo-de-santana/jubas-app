import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PermissionResponse,
  ProfileResponse,
  UserPermissionResponse,
  UserResponse,
} from '@domain';
import {
  UserCreateScreen,
  UserListScreen,
  UserPermissionScreen,
  UserProfileCreateScreen,
  UserProfileScreen,
  UserProfileUpdateScreen,
  UserUpdateScreen,
} from '@screens';
import {defaultOptions} from '../screenOptions';
import {mask} from '@utils';

export type UserStackParamList = {
  UserPermissionScreen: undefined;
  UserListScreen: {permission: PermissionResponse};
  UserCreateScreen: undefined;
  UserUpdateScreen: {user: UserPermissionResponse};
  UserProfileScreen: {userId: string};
  UserProfileCreateScreen: {userId: string};
  UserProfileUpdateScreen: {
    userId: string;
    profile: ProfileResponse;
  };
};

const NativeStack = createNativeStackNavigator<UserStackParamList>();

export function UserStack() {
  return (
    <NativeStack.Navigator
      initialRouteName="UserPermissionScreen"
      screenOptions={{...defaultOptions, headerShown: true}}>
      <NativeStack.Screen
        name="UserPermissionScreen"
        component={UserPermissionScreen}
        options={{headerTitle: 'Tipos de usuário'}}
      />
      <NativeStack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={({route}) => ({
          title: mask.capitalizeFirstLetter(route.params.permission.type),
        })}
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
          title: 'Acesso de usuário',
        }}
      />
      <NativeStack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          title: 'Detalhes',
        }}
      />
      <NativeStack.Screen
        name="UserProfileCreateScreen"
        component={UserProfileCreateScreen}
        options={{
          title: 'Novo perfil',
        }}
      />
      <NativeStack.Screen
        name="UserProfileUpdateScreen"
        component={UserProfileUpdateScreen}
        options={({route}) => ({headerTitle: route.params.profile.name})}
      />
    </NativeStack.Navigator>
  );
}
