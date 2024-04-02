import {TouchableOpacity} from '@components';
import {ProfileListItemProps} from '@services';
import {LineItens} from './LineItens';
import {mask} from '@utils';

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
      <LineItens
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
