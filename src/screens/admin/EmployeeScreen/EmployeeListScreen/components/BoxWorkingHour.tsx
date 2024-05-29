import {
  Text,
  BoxFourTimes,
  BoxHeaderWorkingHour,
  TouchableOpacity,
  Box,
} from '@components';
import {WorkingHourResponse} from '@domain';
import {
  ModalProfileStatus,
  ModalProfileStatusProps,
} from './ModalProfileStatus';
import {EmployeeListScreenNavigation} from '../EmployeeListScreen';

type BoxWorkingHourProps = EmployeeListScreenNavigation &
  ModalProfileStatusProps;

export function BoxWorkingHour({
  navigation,
  employee,
}: Readonly<BoxWorkingHourProps>) {
  return (
    <>
      <Box flexDirection="row" justifyContent="space-between">
        <Text
          color="secondaryContrast"
          textAlign="justify"
          verticalAlign="middle">
          Horários
        </Text>
        <ModalProfileStatus employee={employee} />
      </Box>
      <WorkingHourItem
        navigation={navigation}
        employeeId={employee.id}
        workingHour={employee.workingHour}
      />
    </>
  );
}

type WorkingHourItemProps = {
  employeeId: string;
  workingHour: WorkingHourResponse;
} & EmployeeListScreenNavigation;

function WorkingHourItem({
  navigation,
  employeeId,
  workingHour,
}: Readonly<WorkingHourItemProps>) {
  return (
    <TouchableOpacity
      bg="primaryContrast"
      borderRadius="s6"
      marginBottom="s12"
      padding="s10"
      onPress={() =>
        navigation.navigate('EmployeeWorkingHourScreen', {
          employeeId,
          workingHourId: workingHour.id,
        })
      }>
      {workingHour.id ? (
        <>
          <BoxHeaderWorkingHour
            justifyContent="center"
            textProps={{color: 'primary'}}
          />
          <BoxFourTimes
            justifyContent="center"
            disabled
            textProps={{color: 'primary'}}
            textValues={[
              workingHour.startTime,
              workingHour.startInterval,
              workingHour.endInterval,
              workingHour.endTime,
            ]}
          />
        </>
      ) : (
        <Text padding="s10" color="primary">
          Nenhuma jornada atribuída
        </Text>
      )}
    </TouchableOpacity>
  );
}
