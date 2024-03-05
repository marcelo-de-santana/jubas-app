import {
  Box,
  ListEmpty,
  ListSeparator,
  Screen,
  TouchableOpacityItem,
} from '@components';
import {appointmentUseCases} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {mask} from '@utils';
import {useEffect, useState} from 'react';
import {Schedule} from './components/Schedule';

export function AppointmentListScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'AppointmentListScreen'>>) {
  const {data, fetch, isError, isLoading} =
    appointmentUseCases.getDaysOfAttendance();

  useEffect(() => {
    fetch();
  }, []);

  const [dayOfWeek, setDayOfWeek] = useState<string>();

  return (
    <Screen flex={1}>
      {isLoading || isError || data?.length === 0 ? (
        <ListEmpty loading={isLoading} title="Nenhum dia disponível." />
      ) : (
        <>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="wrap">
            {data?.map(item => {
              return (
                <TouchableOpacityItem
                  key={item}
                  bg="primaryContrast"
                  padding="s10"
                  marginBottom="s10"
                  width={100}
                  borderRadius="s6"
                  disabled={dayOfWeek === item}
                  opacity={dayOfWeek === item ? 0.7 : 1}
                  textProps={{color: 'primary'}}
                  label={mask.dayOfWeek(new Date(item))}
                  onPress={() => setDayOfWeek(item)}
                />
              );
            })}
          </Box>
          {dayOfWeek && <ListSeparator />}
          <Schedule date={dayOfWeek} />
        </>
      )}
    </Screen>
  );
}
