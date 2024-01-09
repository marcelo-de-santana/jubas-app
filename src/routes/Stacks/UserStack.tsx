import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileResponse, UserResponse} from '@domain';
import {
  UserCreateScreen,
  UserListScreen,
  UserProfileCreateScreen,
  UserProfileScreen,
  UserProfileUpdateScreen,
  UserUpdateScreen,
} from '@screens';
import {defaultOptions} from '../screenOptions';

export type UserStackParamList = {
  UserListScreen: undefined;
  UserCreateScreen: undefined;
  UserUpdateScreen: {user: UserResponse};
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
      initialRouteName="UserListScreen"
      screenOptions={{...defaultOptions, headerShown: true}}>
      <NativeStack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{title: 'Usuários'}}
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
