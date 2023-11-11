import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MinimalUserResponseDTO, ProfileResponse, UserResponse} from '@domain';
import {
  UserCreateScreen,
  UserListScreen,
  UserProfileCreateScreen,
  UserProfileScreen,
  UserProfileUpdateScreen,
  UserUpdateScreen,
} from '@screens';
import {colorRegistry} from '@styles';

export type UserStackParamList = {
  UserListScreen: undefined;
  UserCreateScreen: undefined;
  UserUpdateScreen: {user: UserResponse};
  UserProfileScreen: {user: UserResponse};
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
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: colorRegistry['lightGray'],
        },
        headerTintColor: colorRegistry['steelBlue'],
        headerTitleAlign: 'center',
      }}>
      <NativeStack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{title: 'Usuários', headerShown: true}}
      />
      <NativeStack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          title: 'Detalhes',
          headerShown: true,
        }}
      />
      <NativeStack.Screen
        name="UserCreateScreen"
        component={UserCreateScreen}
        options={{
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="UserUpdateScreen"
        component={UserUpdateScreen}
        options={{
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="UserProfileUpdateScreen"
        component={UserProfileUpdateScreen}
        options={{
          presentation: 'transparentModal',
        }}
      />
      <NativeStack.Screen
        name="UserProfileCreateScreen"
        component={UserProfileCreateScreen}
        options={{
          title: 'Detalhes',
          presentation: 'transparentModal',
        }}
      />
    </NativeStack.Navigator>
  );
}
