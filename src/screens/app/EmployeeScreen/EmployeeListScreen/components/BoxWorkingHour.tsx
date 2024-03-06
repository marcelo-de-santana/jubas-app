import {
  Box,
  Text,
  BoxFourTimes,
  BoxHeaderWorkingHour,
  TouchableOpacity,
} from '@components';
import {ButtonAddComponent} from './ButtonAdd';
import {BusinessManagementStackProps} from '@routes';
import {WorkingHourResponse} from '@domain';

type BoxWorkingHourProps = {
  workingHour: WorkingHourResponse;
} & Pick<BusinessManagementStackProps<'EmployeeListScreen'>, 'navigation'>;

export function BoxWorkingHour({
  navigation,
  workingHour,
}: Readonly<BoxWorkingHourProps>) {
  if (workingHour.id) {
    return (
      <TouchableOpacity
        bg="primaryContrast"
        borderRadius="s6"
        marginBottom="s12"
        padding="s10"
        onLongPress={() =>
          navigation.navigate('EmployeeUpdateWorkingHourScreen')
        }>
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
      </TouchableOpacity>
    );
  }

  return (
    <Box
      bg="primaryContrast"
      borderRadius="s6"
      marginBottom="s12"
      padding="s10">
      <Text padding="s10" color="primary">
        Nenhuma jornada atribuída
      </Text>
      <ButtonAddComponent
        onPress={() => navigation.navigate('EmployeeAddWorkingHourScreen')}
      />
    </Box>
  );
}
