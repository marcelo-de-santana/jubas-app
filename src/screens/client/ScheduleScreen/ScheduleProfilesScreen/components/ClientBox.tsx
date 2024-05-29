import {ListEmpty, Text, TouchableOpacityItem} from '@components';
import {ProfileResponse, useUserGetById} from '@domain';
import {ScheduleStackProps} from '@routes';
import {useAuthStore} from '@services';

interface ClientBoxProps extends ScheduleStackProps<'ScheduleProfilesScreen'> {}

export function ClientBox({navigation, route}: Readonly<ClientBoxProps>) {
  const {user} = useAuthStore();

  if (user) {
    const {data, isError, isLoading} = useUserGetById(user.id);

    if (isLoading) {
      return <ListEmpty loading={isLoading} />;
    }

    const navigateToResumeScreen = (
      profile: Pick<ProfileResponse, 'id' | 'name'>,
    ) => {
      navigation.navigate('ScheduleResumeScreen', {
        ...route.params,
        profile,
      });
    };

    return (
      <>
        <Text variant="paragraphMedium" textAlign="justify" paddingBottom="s10">
          {isError
            ? 'Nenhum perfil disponível.'
            : 'Quem vai receber o atendimento?'}
        </Text>
        {data?.profiles?.map(profile => (
          <TouchableOpacityItem
            key={profile.id}
            backgroundColor="primaryContrast"
            borderRadius="s6"
            padding="s10"
            marginVertical="s4"
            textProps={{
              variant: 'paragraphMedium',
              color: 'primary',
              textAlign: 'justify',
            }}
            onPress={() =>
              navigateToResumeScreen({id: profile.id, name: profile.name})
            }
            label={profile.name}
          />
        ))}
        <TouchableOpacityItem
          marginTop="s20"
          textProps={{variant: 'paragraphSmall'}}
          label={isError ? 'Criar um perfil' : 'Adicionar outro perfil'}
          onPress={() => navigation.navigate('ScheduleProfileCreateScreen')}
        />
      </>
    );
  }
}
