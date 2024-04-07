import {
  Box,
  ClockButton,
  ModalStatus,
  Screen,
  BoxHeaderWorkingHour,
  ButtonSuccess,
} from '@components';
import {UseWHClockFunctionsType} from '@hooks';
import {useNavigation} from '@react-navigation/native';

type WorkingHourFormProps = {
  isError: boolean;
  isSuccess: boolean;
  isPending: boolean;
  sendForm: () => void;
} & UseWHClockFunctionsType;

export function WorkingHourForm({
  isError,
  isPending,
  isSuccess,
  workingHour,
  handleWorkingHour,
  sendForm,
}: WorkingHourFormProps) {
  const {goBack} = useNavigation();

  return (
    <Screen flex={1}>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={goBack}
      />
      <BoxHeaderWorkingHour />
      <Box flexDirection="row" justifyContent="space-between">
        <ClockButton
          loading={isPending}
          timeState={workingHour['startTime']}
          setTimeState={(time: string) =>
            handleWorkingHour({key: 'startTime', value: time})
          }
        />
        <ClockButton
          loading={isPending}
          timeState={workingHour['startInterval']}
          setTimeState={(time: string) =>
            handleWorkingHour({key: 'startInterval', value: time})
          }
        />
        <ClockButton
          loading={isPending}
          timeState={workingHour['endInterval']}
          setTimeState={(time: string) =>
            handleWorkingHour({key: 'endInterval', value: time})
          }
        />
        <ClockButton
          loading={isPending}
          timeState={workingHour['endTime']}
          setTimeState={(time: string) =>
            handleWorkingHour({key: 'endTime', value: time})
          }
        />
      </Box>
      <ButtonSuccess
        loading={isPending}
        marginTop="s40"
        backgroundColor="primaryContrast"
        textProps={{variant: 'paragraphMedium', color: 'primary'}}
        title="Salvar"
        onPress={sendForm}
      />
    </Screen>
  );
}
