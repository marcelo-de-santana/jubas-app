import {Box, CollapsibleBox, Text, TouchableOpacity} from '@components';
import {UserProfileResponse} from '@domain';
import {ListRenderItemInfo} from 'react-native';
import {BoxProfiles} from './BoxProfiles';
import {UserStackProps} from '@routes';

type UserListItemProps = ListRenderItemInfo<UserProfileResponse> &
  Pick<UserStackProps<'UserListScreen'>, 'navigation'>;

export function UserListItem({item: user, navigation}: UserListItemProps) {
  const hasOneProfile = user.profiles?.length === 1;

  const navigateToProfileList = () =>
    navigation.navigate('ProfileListScreen', {user});

  const navigateToProfileCreate = () =>
    navigation.navigate('ProfileCreateScreen', {userId: user.id});

  return (
    <CollapsibleBox
      buttonProps={{
        onLongPress: () => navigation.navigate('UserUpdateScreen', {user}),
      }}
      title={user.email}>
      {user.profiles && user.profiles?.length > 0 ? (
        <Box bg="secondary" borderRadius="s6" padding="s12">
          <Text textAlign="justify" color="secondaryContrast">
            {hasOneProfile ? 'Perfil' : 'Perfis'}
          </Text>
          <BoxProfiles
            profiles={user.profiles}
            navigateToProfileScreen={navigateToProfileList}
          />
        </Box>
      ) : (
        <TouchableOpacity
          backgroundColor="secondary"
          borderRadius="s6"
          padding="s12"
          onPress={navigateToProfileCreate}>
          <Text color="secondaryContrast">Nenhum perfil cadastrado</Text>
        </TouchableOpacity>
      )}
    </CollapsibleBox>
  );
}
