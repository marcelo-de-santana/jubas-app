import {
  Box,
  BoxDaysOfWeek,
  ButtonProps,
  CollapsibleAccording,
  FlatList,
  ListEmpty,
  ListSeparator,
  Screen,
  Text,
  TextProps,
  TouchableOpacityItem,
  TouchableOpacityItems,
} from '@components';
import {
  CategorySpecialtiesResponse,
  appointmentUseCases,
  categoryUseCases,
} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {mask} from '@utils';
import {useEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {Schedule} from './components/Schedule';

export function AppointmentHomeScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'AppointmentHomeScreen'>>) {
  const {data, fetch, isError, isLoading, refresh} =
    appointmentUseCases.getDaysOfAttendance();

  useEffect(() => {
    fetch();
  }, []);

  const [dayOfWeek, setDayOfWeek] = useState<string>();

  if (isLoading || isError || data?.length === 0) {
    return <ListEmpty loading={isLoading} title="Nenhum dia disponível." />;
  }

  return (
    <Screen flex={1}>
      <Box flexDirection="row" justifyContent="space-between" flexWrap="wrap">
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
    </Screen>
  );
}
