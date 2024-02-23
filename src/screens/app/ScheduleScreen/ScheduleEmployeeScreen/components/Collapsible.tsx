import {
  Box,
  BoxTimeAvailable,
  ButtonProps,
  CollapsibleAccording,
  TextProps,
} from '@components';
import {ScheduleResponse} from '@domain';
import {ScheduleStackProps} from '@routes';

interface CollapsibleProps
  extends ScheduleStackProps<'ScheduleEmployeesScreen'> {
  employee: ScheduleResponse;
  collapsed?: boolean;
}

export function Collapsible({
  employee,
  collapsed,
  navigation,
  route,
}: Readonly<CollapsibleProps>) {
  const navigateToProfileScreen = (hour: string) => {
    navigation.navigate('ScheduleProfilesScreen', {
      specialty: route.params.specialty,
      employee: {id: employee.employeeId, name: employee.employeeName},
      hour,
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
      title={employee.employeeName}>
      <Box flexDirection="row" flexWrap="wrap">
        {employee?.workingHours.map(availableTime => {
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
