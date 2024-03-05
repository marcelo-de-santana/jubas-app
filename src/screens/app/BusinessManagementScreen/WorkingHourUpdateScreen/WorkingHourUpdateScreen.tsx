import {
  Box,
  ButtonTwoOptions,
  ClockButton,
  ModalStatus,
  Screen,
  WorkingHourHeader,
} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {useNavigation, useWHClockFunctions} from '@hooks';
import {workingHourUseCases} from '@domain';

export function WorkingHourUpdateScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'WorkingHourUpdateScreen'>>) {
  const {fetch, isLoading, status} = workingHourUseCases.update();
  const {goBack} = useNavigation();
  const {workingHour, handleWorkingHour} = useWHClockFunctions(
    route.params.workingHour,
  );

  const sendToUpdate = () => {
    fetch({...workingHour, id: route.params.workingHour.id});
  };

  return (
    <Screen>
      <ModalStatus
        status={status}
        successAction={goBack}
        errorAction={goBack}
      />
      <WorkingHourHeader />
      <Box flexDirection="row" justifyContent="space-between">
        <ClockButton
          loading={isLoading}
          timeState={workingHour['startTime']}
          setTimeState={(time: string) =>
            handleWorkingHour({key: 'startTime', value: time})
          }
        />
        <ClockButton
          loading={isLoading}
          timeState={workingHour['startInterval']}
          setTimeState={(time: string) =>
            handleWorkingHour({key: 'startInterval', value: time})
          }
        />
        <ClockButton
          loading={isLoading}
          timeState={workingHour['endInterval']}
          setTimeState={(time: string) =>
            handleWorkingHour({key: 'endInterval', value: time})
          }
        />
        <ClockButton
          loading={isLoading}
          timeState={workingHour['endTime']}
          setTimeState={(time: string) =>
            handleWorkingHour({key: 'endTime', value: time})
          }
        />
      </Box>
      <ButtonTwoOptions
        cancelButtonProps={{onPress: navigation.goBack}}
        confirmButtonProps={{onPress: sendToUpdate}}
      />
    </Screen>
  );
}
