import {
  Box,
  BoxTimeAvailable,
  ButtonProps,
  CollapsibleAccording,
  TextProps,
} from '@components';
import {EmployeeScheduleTimeResponse} from '@domain';
import {ScheduleStackProps} from '@routes';

interface CollapsibleProps
  extends ScheduleStackProps<'ScheduleEmployeesScreen'> {
  appointment: EmployeeScheduleTimeResponse;
  collapsed?: boolean;
}

export function Collapsible({
  appointment,
  collapsed,
  navigation,
  route,
}: Readonly<CollapsibleProps>) {
  const navigateToProfileScreen = (time: string) => {
    navigation.navigate('ScheduleProfilesScreen', {
      ...route.params,
      employee: {id: appointment.employeeId, name: appointment.employeeName},
      time,
    });
  };

  return (
    <CollapsibleAccording
      collapsed={collapsed}
      backgroundColor="primaryContrast"
      padding="s10"
      borderBottomLeftRadius="s6"
      borderBottomRightRadius="s6"
      buttonProps={$buttonProps}
      textProps={$textProps}
      title={appointment.employeeName}>
      <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
        {appointment?.workingHours.map(availableTime => {
          return (
            <BoxTimeAvailable
              key={availableTime.time}
              scheduleTime={availableTime}
              onPress={() => navigateToProfileScreen(availableTime.time)}
            />
          );
        })}
      </Box>
    </CollapsibleAccording>
  );
}

const $buttonProps: ButtonProps = {
  backgroundColor: 'primaryContrast',
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
