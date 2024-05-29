import {BoxHeader} from '../BoxHeader';
import {useVisibility} from '@hooks';

import {ListSeparator, Modal, Text} from '@components';
import {CatalogList} from './CatalogList';
import {SelectedSpecialtiesState, HandleSpecialtiesFunctions} from '../types';

type BoxCatalogProps = SelectedSpecialtiesState & HandleSpecialtiesFunctions;

export function BoxCatalog({
  selectedSpecialties,
  addSpecialty,
  removeSpecialty,
}: Readonly<BoxCatalogProps>) {
  const modalVisibilityProps = useVisibility();
  const {close} = modalVisibilityProps;

  return (
    <>
      <ListSeparator marginBottom="s12" />
      <BoxHeader title="Especialidades" />

      <Modal
        OpenModalComponent={
          <OpenModalComponent selectedSpecialties={selectedSpecialties} />
        }
        checkIconProps={{name: 'CheckIcon', size: 25, onPress: close}}
        {...modalVisibilityProps}>
        <CatalogList
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
