import {BoxHeader} from './BoxHeader';
import {Modal} from './Modal';
import {useModalVisibility} from '@hooks';

import {ListSeparator, Text} from '@components';
import {EmployeeSelectSpecialtiesScreen} from '../../EmployeeSelectSpecialtiesScreen/EmployeeSelectSpecialtiesScreen';
import { EmployeeSelectSpecialtiesScreenProps, SelectedSpecialtiesState } from './types';

export function BoxSpecialties({
  selectedSpecialties,
  addSpecialty,
  removeSpecialty,
}: Readonly<EmployeeSelectSpecialtiesScreenProps>) {
  const modalVisibilityProps = useModalVisibility();
  const {closeModal} = modalVisibilityProps;

  return (
    <>
      <ListSeparator marginBottom="s12" />
      <BoxHeader title="Especialidades" />

      <Modal
        OpenModalComponent={
          <OpenModalComponent selectedSpecialties={selectedSpecialties} />
        }
        checkIconProps={{name: 'CheckIcon', size: 25, onPress: closeModal}}
        {...modalVisibilityProps}>
        <EmployeeSelectSpecialtiesScreen
          selectedSpecialties={selectedSpecialties}
          addSpecialty={addSpecialty}
          removeSpecialty={removeSpecialty}
        />
      </Modal>
    </>
  );
}

function OpenModalComponent({
  selectedSpecialties,
}: Readonly<SelectedSpecialtiesState>) {
  if (selectedSpecialties && selectedSpecialties.length > 0) {
    return Array.from(selectedSpecialties).map(specialty => (
      <Text textAlign="justify" key={specialty.id}>
        {specialty.name}
      </Text>
    ));
  }
  return <Text>Adicionar especialidades</Text>;
}
