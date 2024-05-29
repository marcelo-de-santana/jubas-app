import {Box, BoxTimeAvailable, CollapsibleAccording} from '@components';
import {EmployeeScheduleTimeResponse} from '@domain';
import {Alert, ListRenderItemInfo} from 'react-native';
import {AppointmentStackProps} from '@routes';

type NavigationParam = Pick<
  AppointmentStackProps<'AppointmentListScreen'>,
  'navigation'
> & {
  date?: string;
};

export function ScheduleListItem({
  item,
  navigation,
  date,
}: ListRenderItemInfo<EmployeeScheduleTimeResponse> & NavigationParam) {
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
      title={item.name}>
      <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
        {item?.workingHours.map(availableTime => {
          const {available, time, appointmentId} = availableTime;

          const navigateToHandleScreen = () => {
            if (!available && appointmentId) {
              return navigation.navigate('AppointmentDescriptionScreen', {
                appointmentId,
              });
            }
            if (!available) {
              return Alert.alert('Horário de intervalo');
            }
            if (date) {
              return navigation.navigate('AppointmentCreateScreen', {
                date,
                time,
                employee: {id: item.id, name: item.name},
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
