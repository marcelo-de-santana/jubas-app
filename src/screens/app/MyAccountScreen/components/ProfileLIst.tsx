import {ProfileResponse, useProfileUpdate} from '@domain';
import {ModalProfile} from './ModalProfile';
import {Box, ListSeparator, Text} from '@components';
import {mask} from '@utils';

export function ProfileList({profiles}: {profiles: ProfileResponse[]}) {
  return profiles.map(profile => (
    <ProfileItem key={profile.id} profile={profile} />
  ));
}

type SendProfileType = Omit<ProfileResponse, 'id' | 'statusProfile'>;

function ProfileItem({profile}: {profile: ProfileResponse}) {
  const {mutate, isPending} = useProfileUpdate();
  const sendProfile = (updatedProfile: SendProfileType) => {
    mutate({
      ...updatedProfile,
      id: profile.id,
      statusProfile: true,
    });
  };

  return (
    <ModalProfile
      profile={profile}
      isPending={isPending}
      sendProfile={sendProfile}>
      <Box flexDirection="row" justifyContent="space-between">
        <Box width="50%">
          <Text textAlign="left">{'Nome: ' + profile.name}</Text>
        </Box>
        <Box width="50%">
          <Text textAlign="right">{'CPF: ' + mask.cpf(profile.cpf)}</Text>
        </Box>
      </Box>

      <ListSeparator mt="s12" />
    </ModalProfile>
  );
}
