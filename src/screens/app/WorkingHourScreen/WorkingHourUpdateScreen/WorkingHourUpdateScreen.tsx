import {
  Box,
  ButtonTwoOptions,
  ClockButton,
  ModalStatus,
  Screen,
  BoxHeaderWorkingHour,
} from '@components';
import {WorkingHourStackProps} from '@routes';
import {useWHClockFunctions} from '@hooks';
import {workingHourUseCases} from '@domain';

export function WorkingHourUpdateScreen({
  navigation,
  route,
}: Readonly<WorkingHourStackProps<'WorkingHourUpdateScreen'>>) {
  const {fetch, isLoading, status} = workingHourUseCases.update();
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
        successAction={navigation.goBack}
        errorAction={navigation.goBack}
      />
      <BoxHeaderWorkingHour />
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
        cancelButtonProps={{loading: isLoading, onPress: navigation.goBack}}
        confirmButtonProps={{loading: isLoading, onPress: sendToUpdate}}
      />
    </Screen>
  );
}
