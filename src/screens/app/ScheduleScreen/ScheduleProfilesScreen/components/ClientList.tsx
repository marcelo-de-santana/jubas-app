import {Text, TouchableOpacityItem} from '@components';
import {ProfileResponse} from '@domain';
import {ScheduleStackProps} from '@routes';

interface ClientListProps extends ScheduleStackProps<'ScheduleProfilesScreen'> {
  profiles?: ProfileResponse[];
}

export function ClientList({
  profiles,
  navigation,
  route,
}: Readonly<ClientListProps>) {
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
        Quem vai receber o atendimento?
      </Text>
      {profiles?.map(profile => (
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
    </>
  );
}
