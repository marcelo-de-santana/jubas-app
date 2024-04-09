import {BoxHeader} from '../BoxHeader';
import {Text} from '@components';
import {Modal} from '../Modal';
import {useModalVisibility} from '@hooks';

import {ProfileUserResponse} from '@domain';
import {ProfileList} from './ProfileList';
import {SelectedProfileState, SelectEmployeeParamsFunction} from '../types';

type BoxProfileProps = SelectedProfileState & SelectEmployeeParamsFunction;

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
        <ProfileList
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
