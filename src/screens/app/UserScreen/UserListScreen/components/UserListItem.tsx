import {Box, CollapsibleBox, Text, TouchableOpacity} from '@components';
import {UserProfileResponse} from '@domain';
import {ListRenderItemInfo} from 'react-native';
import {BoxProfiles} from './BoxProfiles';
import {UserStackProps} from '@routes';

type UserListItemProps = ListRenderItemInfo<UserProfileResponse> &
  Pick<UserStackProps<'UserListScreen'>, 'navigation'>;

export function UserListItem({item: user, navigation}: UserListItemProps) {
  const hasProfile = user.profiles && user.profiles?.length > 0;
  const hasOneProfile = user.profiles?.length === 1;

  return (
    <CollapsibleBox
      buttonProps={{
        onLongPress: () => navigation.navigate('UserUpdateScreen', {user}),
      }}
      title={user.email}>
      {hasProfile ? (
        <Box bg="secondary" borderRadius="s6" padding="s12">
          <Text textAlign="justify" color="secondaryContrast">
            {hasOneProfile ? 'Perfil' : 'Perfis'}
          </Text>
          <BoxProfiles profiles={user.profiles} />
        </Box>
      ) : (
        <TouchableOpacity
          backgroundColor="secondary"
          borderRadius="s6"
          padding="s12"
          onPress={()=> navigation.navigate("UserProfileUpdateScreen", {userId: '',profile: {}})}
          >
          <Text color="secondaryContrast">Nenhum perfil cadastrado</Text>
        </TouchableOpacity>
      )}
    </CollapsibleBox>
  );
}
