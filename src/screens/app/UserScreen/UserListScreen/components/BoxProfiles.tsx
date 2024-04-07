import {Box, ListSeparator, ProfileItems, TouchableOpacity} from '@components';
import {ProfileResponse} from '@domain';
import {mask} from '@utils';

type BoxProfilesProps = {
  profiles: ProfileResponse[];
  navigateToProfileScreen: () => void;
};

export function BoxProfiles({
  profiles,
  navigateToProfileScreen,
}: BoxProfilesProps) {
  return (
    <TouchableOpacity
      backgroundColor="primaryContrast"
      flexDirection="row"
      flexWrap="wrap"
      borderRadius="s6"
      padding="s10"
      activeOpacity={0.5}
      onPress={navigateToProfileScreen}>
      <ProfileItems
        textValues={['Nome', 'CPF', 'Status']}
        textProps={{variant: 'paragraphSmall', color: 'primary'}}
      />
      <ListSeparator width="100%" borderColor="primary" mt="s12" />

      {profiles?.map((profile, index, array) => {
        const isLast = array.length - 1 === index;

        return (
          <Box flexDirection="column" pt="s12" key={profile.id}>
            <Box flexDirection="row">
              <ProfileItems
                textProps={{color: 'primary'}}
                textValues={[
                  profile.name,
                  mask.cpf(profile.cpf),
                  profile.statusProfile ? 'Ativo' : 'Inativo',
                ]}
              />
            </Box>
            {!isLast && <ListSeparator mt="s12" borderColor="primary" />}
          </Box>
        );
      })}
    </TouchableOpacity>
  );
}
