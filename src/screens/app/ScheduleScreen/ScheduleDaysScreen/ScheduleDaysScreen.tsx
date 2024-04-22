import {
  Box,
  BoxDaysOfWeek,
  BoxTimeAvailable,
  ButtonProps,
  CollapsibleAccording,
  FlatList,
  ListSeparator,
  Screen,
  SpecialtyDescription,
  Text,
  TextProps,
} from '@components';
import {
  EmployeeScheduleTimeResponse,
  ScheduleTimeResponse,
  SpecialtyResponse,
  useAppointmentGetSchedule,
} from '@domain';
import {ScheduleStackProps} from '@routes';
import {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export function ScheduleDaysScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleDaysScreen'>>) {
  const {
    data: schedules,
    isError,
    isLoading,
  } = useAppointmentGetSchedule({
    specialtyId: route.params.specialty.id,
  });
  const hasSchedule = schedules && schedules.length > 0;

  const [dayOfWeek, setDayOfWeek] = useState<string | undefined>(
    hasSchedule ? schedules[0].date : undefined,
  );

  const chooseDay = (day: string) => {
    setDayOfWeek(day);
  };
  const daysOfWeek = schedules?.map(schedule => ({
    date: schedule.date,
    available: schedule.available,
  }));

  const employees = schedules
    ?.filter(schedule => schedule.date === dayOfWeek)
    .flatMap(filteredSchedule => filteredSchedule.employees ?? []);

  return (
    <Screen flex={1}>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <Text variant="paragraphMedium" textAlign="justify" mb="s12">
        Selecione um dia
      </Text>
      <BoxDaysOfWeek
        selectedDay={dayOfWeek}
        daysOfWeek={daysOfWeek}
        chooseDay={chooseDay}
      />
      <FlatList
        loading={isLoading}
        error={isError}
        isSeparator={false}
        data={employees}
        renderItem={prop => (
          <EmployeeListItem
            {...prop}
            specialty={route.params.specialty}
            day={dayOfWeek}
          />
        )}
        listEmptyTitle="Nenhum funcionário disponível."
      />
    </Screen>
  );
}

type EmployeeListItemProps =
  ListRenderItemInfo<EmployeeScheduleTimeResponse> & {
    specialty?: SpecialtyResponse;
    day?: string;
  };

function EmployeeListItem({
  item: employee,
  index,
  specialty,
  day,
}: EmployeeListItemProps) {
  const {navigate} = useNavigation<any>();

  const navigateToProfileScreen = (time: string) => {
    navigate('ScheduleProfilesScreen', {
      specialty,
      employee: {id: employee.id, name: employee.name},
      day,
      time,
    });
  };

  return (
    <CollapsibleAccording
      collapsed={true}
      backgroundColor="primaryContrast"
      px="s10"
      pb="s10"
      borderBottomLeftRadius="s6"
      borderBottomRightRadius="s6"
      buttonProps={$buttonProps}
      textProps={$textProps}
      title={employee?.name}>
      <WorkingHourList
        workingHours={employee.workingHours}
        navigateToProfileScreen={navigateToProfileScreen}
      />
    </CollapsibleAccording>
  );
}

type WorkingHourListProps = {
  workingHours: ScheduleTimeResponse[];
  navigateToProfileScreen: (time: string) => void;
};

function WorkingHourList({
  workingHours,
  navigateToProfileScreen,
}: WorkingHourListProps) {
  return (
    <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
      {workingHours.map(availableTime => {
        return (
          <BoxTimeAvailable
            key={availableTime.time}
            scheduleTime={availableTime}
            onPress={() => navigateToProfileScreen(availableTime.time)}
          />
        );
      })}
    </Box>
  );
}

const $buttonProps: ButtonProps = {
  bg: 'primaryContrast',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingHorizontal: 's10',
  height: 50,
  borderTopLeftRadius: 's6',
  borderTopRightRadius: 's6',
  marginTop: 's4',
};

const $textProps: TextProps = {
  variant: 'paragraphMedium',
  color: 'primary',
  textAlign: 'center',
  verticalAlign: 'middle',
};
