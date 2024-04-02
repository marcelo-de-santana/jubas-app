import {BoxHeader} from './BoxHeader';
import {Text} from '@components';
import {Modal} from './Modal';
import {useModalVisibility} from '@hooks';

import {ProfileUserResponse} from '@domain';
import {BoxProfileProps, SelectedProfileState} from '@services';
import {EmployeeSelectProfileScreen} from '../../EmployeeSelectProfileScreen/EmployeeSelectProfileScreen';

export function BoxProfile({
  selectedProfile,
  selectParams,
}: Readonly<BoxProfileProps>) {
  const modalVisibilityProps = useModalVisibility();
  const {closeModal} = modalVisibilityProps;

  const chooseProfile = (profile: ProfileUserResponse) => {
    selectParams({profile});
    closeModal();
  };

  return (
    <>
      <BoxHeader title="Perfil" />
      <Modal
        {...modalVisibilityProps}
        OpenModalComponent={
          <OpenModalComponent selectedProfile={selectedProfile} />
        }>
        <EmployeeSelectProfileScreen
          selectedProfile={selectedProfile}
          chooseProfile={chooseProfile}
        />
      </Modal>
    </>
  );
}

function OpenModalComponent({selectedProfile}: Readonly<SelectedProfileState>) {
  if (selectedProfile) {
    return (
      <Text color="primaryContrast" textAlign="justify">
        {selectedProfile.name}
      </Text>
    );
  }
  return <Text color="primaryContrast">Selecionar perfil</Text>;
}
