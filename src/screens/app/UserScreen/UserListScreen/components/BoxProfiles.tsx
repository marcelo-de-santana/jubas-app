import {ProfileItems, TouchableOpacity} from '@components';
import {ProfileResponse} from '@domain';
import {mask} from '@utils';

export function BoxProfiles({profiles}: {profiles?: ProfileResponse[]}) {
  return (
    <TouchableOpacity
      backgroundColor="primaryContrast"
      flexDirection="row"
      flexWrap="wrap"
      borderRadius="s6"
      padding="s10"
      activeOpacity={0.5}>
      <ProfileItems
        textValues={['Nome', 'CPF', 'Status']}
        textProps={{variant: 'paragraphSmall', color: 'primary'}}
      />
      {profiles?.map(profile => (
        <ProfileItems
          key={profile.id}
          textProps={{color: 'primary'}}
          textValues={[
            profile.name,
            mask.cpf(profile.cpf),
            profile.statusProfile ? 'Ativo' : 'Inativo',
          ]}
        />
      ))}
    </TouchableOpacity>
  );
}
