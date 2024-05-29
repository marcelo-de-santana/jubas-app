import {Box, Text} from '@components';
import {ModalProfile} from './ModalProfile';
import {ProfileResponse, useProfileCreate} from '@domain';

type SendProfileType = Omit<ProfileResponse, 'id' | 'statusProfile'>;

export function ProfileAdd({userId}: {userId: string}) {
  const {mutate, isPending} = useProfileCreate();

  const sendProfile = (profileCreate: SendProfileType) => {
    mutate({
      userId,
      statusProfile: true,
      ...profileCreate,
    });
  };

  return (
    <ModalProfile isPending={isPending} sendProfile={sendProfile} isCpfEditable>
      <Box p="s8">
        <Text>Adicionar perfil</Text>
      </Box>
    </ModalProfile>
  );
}
