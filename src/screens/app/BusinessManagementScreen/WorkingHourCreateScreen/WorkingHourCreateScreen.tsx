import {
  Box,
  ButtonTwoOptions,
  ClockButton,
  ModalStatus,
  Screen,
  WorkingHourHeader,
} from '@components';
import {workingHourUseCases} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useNavigation, useWHClockFunctions} from '@hooks';

const initialValues = {
  startTime: '09:00',
  startInterval: '13:00',
  endInterval: '14:00',
  endTime: '19:00',
};

export function WorkingHourCreateScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'WorkingHourCreateScreen'>>) {
  const {fetch, isLoading, status} = workingHourUseCases.create();
  const {goBack} = useNavigation();
  const {workingHour, handleWorkingHour} = useWHClockFunctions(initialValues);

  const sendToCreate = () => {
    fetch(workingHour);
  };

  return (
    <Screen flex={1}>
      <ModalStatus
        status={status}
        successAction={goBack}
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
        confirmButtonProps={{onPress: sendToCreate}}
      />
    </Screen>
  );
}
