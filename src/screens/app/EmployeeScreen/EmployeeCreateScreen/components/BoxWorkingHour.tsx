import {WorkingHourResponse} from '@domain';
import {BoxHeader} from './BoxHeader';
import {BoxFourTimes, ListSeparator, Text} from '@components';
import {Modal} from './Modal';
import {useModalVisibility} from '@hooks';

import {BoxWorkingHourProps, SelectedWorkingHourState} from '@services';
import {EmployeeSelectWorkingHourScreen} from '../../EmployeeSelectWorkingHourScreen/EmployeeSelectWorkingHourScreen';

export function BoxWorkingHour({
  selectParams,
  selectedWorkingHour,
}: Readonly<BoxWorkingHourProps>) {
  const modalVisibilityProps = useModalVisibility();
  const {closeModal} = modalVisibilityProps;

  const chooseWorkingHour = (workingHour: WorkingHourResponse) => {
    selectParams({workingHour});
    closeModal();
  };

  return (
    <>
      <ListSeparator marginBottom="s12" />
      <BoxHeader title="Jornada de trabalho" />

      <Modal
        OpenModalComponent={
          <OpenModalComponent selectedWorkingHour={selectedWorkingHour} />
        }
        {...modalVisibilityProps}>
        <EmployeeSelectWorkingHourScreen
          chooseWorkingHour={chooseWorkingHour}
          selectedWorkingHour={selectedWorkingHour}
        />
      </Modal>
    </>
  );
}

function OpenModalComponent({
  selectedWorkingHour,
}: Readonly<SelectedWorkingHourState>) {
  if (selectedWorkingHour) {
    return (
      <BoxFourTimes
        textValues={[
          selectedWorkingHour.startTime,
          selectedWorkingHour.startInterval,
          selectedWorkingHour.endInterval,
          selectedWorkingHour.endTime,
        ]}
      />
    );
  }

  return <Text>Selecionar horários</Text>;
}
