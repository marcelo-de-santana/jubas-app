import {WorkingHourResponse} from '@domain';
import {BoxHeader} from '../BoxHeader';
import {BoxFourTimes, ListSeparator, Modal, Text} from '@components';
import {useVisibility} from '@hooks';

import {WorkingHourList} from './WorkingHourList';
import {SelectedWorkingHourState, SelectEmployeeParamsFunction} from '../types';

type BoxWorkingHourProps = SelectedWorkingHourState &
  SelectEmployeeParamsFunction;

export function BoxWorkingHour({
  selectParams,
  selectedWorkingHour,
}: BoxWorkingHourProps) {
  const modalVisibilityProps = useVisibility();
  const {close} = modalVisibilityProps;

  const chooseWorkingHour = (workingHour: WorkingHourResponse) => {
    selectParams({workingHour});
    close();
  };

  return (
    <>
      <ListSeparator marginBottom="s12" />
      <BoxHeader title="Jornada de trabalho" />

      <Modal
        {...modalVisibilityProps}
        OpenModalComponent={
          <OpenModalComponent selectedWorkingHour={selectedWorkingHour} />
        }>
        <WorkingHourList
          chooseWorkingHour={chooseWorkingHour}
          selectedWorkingHour={selectedWorkingHour}
        />
      </Modal>
    </>
  );
}

function OpenModalComponent({selectedWorkingHour}: SelectedWorkingHourState) {
  if (selectedWorkingHour) {
    return (
      <BoxFourTimes
        disabled
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
