import {Box, BoxTimeAvailable, CollapsibleAccording} from '@components';
import {EmployeeScheduleResponse} from '@domain';
import {Alert, ListRenderItemInfo} from 'react-native';
import {BusinessManagementStackProps} from '@routes';

type NavigationParam = Pick<
  BusinessManagementStackProps<'AppointmentListScreen'>,
  'navigation'
> & {
  date?: string;
};

export function ScheduleListItem({
  item: employee,
  navigation,
  date,
}: ListRenderItemInfo<EmployeeScheduleResponse> & NavigationParam) {
  return (
    <CollapsibleAccording
      collapsed={false}
      backgroundColor="primaryContrast"
      borderBottomLeftRadius="s6"
      borderBottomRightRadius="s6"
      pb="s10"
      buttonProps={{
        activeOpacity: 1,
        backgroundColor: 'primaryContrast',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 's10',
        height: 50,
        borderTopLeftRadius: 's6',
        borderTopRightRadius: 's6',
        marginTop: 's4',
      }}
      textProps={{
        variant: 'paragraphMedium',
        color: 'primary',
      }}
      title={employee.name}>
      <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
        {employee?.workingHours.map(availableTime => {
          const {isAvailable, time, appointmentId} = availableTime;

          const navigateToHandleScreen = () => {
            if (!isAvailable && appointmentId) {
              return navigation.navigate('AppointmentDescriptionScreen', {
                appointmentId,
              });
            }
            if (!isAvailable) {
              return Alert.alert('Horário de intervalo');
            }
            if (date) {
              return navigation.navigate('AppointmentCreateScreen', {
                date,
                time,
                employee: {id: employee.id, name: employee.name},
              });
            }
          };

          return (
            <BoxTimeAvailable
              onPress={navigateToHandleScreen}
              key={time}
              scheduleTime={availableTime}
              disabled={false}
            />
          );
        })}
      </Box>
    </CollapsibleAccording>
  );
}
