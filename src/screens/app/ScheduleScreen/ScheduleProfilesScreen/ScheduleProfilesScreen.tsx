import {
  ListEmpty,
  ListSeparator,
  Screen,
  SpecialtyDescription,
} from '@components';
import {useAuthContext} from '@contexts';
import {
  userUseCases,
} from '@domain';
import {ScheduleStackProps} from '@routes';
import {useEffect} from 'react';
import {AttendanceDescription} from './components/AttendanceDescription';
import {ClientList} from './components/ClientList';

export function ScheduleProfilesScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleProfilesScreen'>>) {
  const {user} = useAuthContext();
  const {data, fetch, isError, isLoading} = userUseCases.getProfilesByUserId();

  useEffect(() => {
    fetch(user.id);
  }, []);

  if (isLoading || isError) {
    return (
      <Screen flex={1}>
        <ListEmpty loading={isLoading} error={isError} />
      </Screen>
    );
  }

  return (
    <Screen scrollable>
      <SpecialtyDescription specialty={route.params.specialty} />
      <Separator />
      <AttendanceDescription
        employee={route.params.employee}
        hour={route.params.hour}
      />
      <Separator />
      <ClientList profiles={data?.profiles} />
    </Screen>
  );
}

const Separator = () => (
  <ListSeparator
    backgroundColor="primaryContrast"
    borderColor="primaryContrast"
    borderWidth={0.5}
    marginBottom="s12"
  />
);
