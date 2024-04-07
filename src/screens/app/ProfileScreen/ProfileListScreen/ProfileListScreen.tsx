import {UserStackProps} from '@routes';
import {FlatList} from 'react-native';
import {
  ListSeparator,
  NavigationHeader,
  ProfileListHeader,
  Screen,
} from '@components';
import {ProfileListItem} from './components/ProfileListItem';
import {ProfileResponse} from '@domain';

export function ProfileListScreen({
  navigation,
  route,
}: UserStackProps<'ProfileListScreen'>) {
  const {user} = route.params;

  const navigateToProfileCreate = () => {
    navigation.navigate('ProfileCreateScreen', {
      userId: user.id,
    });
  };

  const navigateToProfileUpdate = (profile: ProfileResponse) => {
    navigation.navigate('ProfileUpdateScreen', {profile, userId: user.id});
  };

  const headerTitle = `${
    user.profiles && user.profiles.length > 1 ? 'Perfis' : 'Perfil'
  } do usuário`;

  return (
    <>
      <NavigationHeader
        headerTitleProps={{title: headerTitle}}
        rightIconProps={{
          onPress: navigateToProfileCreate,
        }}
      />
      <Screen>
        <FlatList
          data={user.profiles}
          ListHeaderComponent={ProfileListHeader}
          renderItem={prop => (
            <ProfileListItem
              {...prop}
              navigateToProfileUpdate={navigateToProfileUpdate}
            />
          )}
          ItemSeparatorComponent={ListSeparator}
        />
      </Screen>
    </>
  );
}
