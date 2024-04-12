import {
  ActivityIndicator,
  Box,
  BoxTimeAvailable,
  CollapsibleAccording,
} from '@components';
import {EmployeeScheduleResponse, useAppointmentGetAll} from '@domain';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {navigateToAppointmentScreen} from '../appointmentListService';
import {BusinessManagementStackProps} from '@routes';

type NavigationParam = Pick<
  BusinessManagementStackProps<'AppointmentListScreen'>,
  'navigation'
>;

export function Schedule({
  date,
  navigation,
}: Readonly<{date?: string} & NavigationParam>) {
  const {data, mutate} = useAppointmentGetAll();

  useEffect(() => {
    if (date) {
      mutate({date});
    }
  }, [date]);

  return (
    <FlatList
      data={data}
      renderItem={prop => (
        <ScheduleListItem navigation={navigation} {...prop} />
      )}
      ListEmptyComponent={ActivityIndicator}
    />
  );
}

function ScheduleListItem({
  item,
  navigation,
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
      title={item.name}>
      <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
        {item?.workingHours.map(availableTime => {
          const {isAvailable, time, appointmentId} = availableTime;

          const navigateToHandleScreen = () =>
            navigateToAppointmentScreen({
              navigation,
              isAvailable,
              appointmentId,
            });

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
