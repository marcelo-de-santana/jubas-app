import {ProfileItems, TouchableOpacity} from '@components';
import {ProfileResponse} from '@domain';
import {mask} from '@utils';
import {ListRenderItemInfo} from 'react-native';

type ProfileListItemProps = {
  navigateToProfileUpdate: (profile: ProfileResponse) => void;
} & ListRenderItemInfo<ProfileResponse>;

export function ProfileListItem({
  item: profile,
  navigateToProfileUpdate,
}: ProfileListItemProps) {
  return (
    <TouchableOpacity
      flexDirection="row"
      justifyContent="space-between"
      padding="s12"
      onPress={() => navigateToProfileUpdate(profile)}>
      <ProfileItems
        textValues={[
          profile.name,
          mask.cpf(profile.cpf),
          profile.statusProfile ? 'Ativo' : 'Inativo',
        ]}
        textProps={{
          color: 'primaryContrast',
        }}
      />
    </TouchableOpacity>
  );
}
