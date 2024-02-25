import {
  AttendanceDescription,
  ListEmpty,
  ListSeparator,
  Screen,
  SpecialtyDescription,
} from '@components';
import {useAuthContext} from '@contexts';
import {userUseCases} from '@domain';
import {ScheduleStackProps} from '@routes';
import {useEffect} from 'react';
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
      <ListSeparator mb="s12" />
      <AttendanceDescription
        day={route.params.day}
        employee={route.params.employee}
        time={route.params.time}
      />
      <ListSeparator mb="s12" />
      <ClientList
        profiles={data?.profiles}
        navigation={navigation}
        route={route}
      />
    </Screen>
  );
}
