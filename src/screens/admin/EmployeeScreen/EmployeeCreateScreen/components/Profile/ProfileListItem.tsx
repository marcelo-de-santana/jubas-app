import {ProfileItems, TouchableOpacity} from '@components';
import {mask} from '@utils';
import {SelectedProfileState, ChooseProfileFunction} from '../types';
import {ListRenderItemInfo} from 'react-native';
import {ProfileUserResponse} from '@domain';

export type ProfileListItemProps = ListRenderItemInfo<ProfileUserResponse> &
  SelectedProfileState &
  ChooseProfileFunction;

export function ProfileListItem({
  item: profile,
  selectedProfile,
  chooseProfile,
}: Readonly<ProfileListItemProps>) {
  const isSelected = selectedProfile?.id === profile.id;

  return (
    <TouchableOpacity
      flexDirection="row"
      justifyContent="space-between"
      padding="s12"
      onPress={() => chooseProfile(profile)}
      disabled={isSelected}>
      <ProfileItems
        textValues={[
          profile.name,
          mask.cpf(profile.cpf),
          profile.statusProfile ? 'Ativo' : 'Inativo',
        ]}
        textProps={{
          color: isSelected ? 'secondaryContrast' : 'primaryContrast',
        }}
      />
    </TouchableOpacity>
  );
}
