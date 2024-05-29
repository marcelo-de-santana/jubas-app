import {BoxHeader} from '../BoxHeader';
import {Modal, Text} from '@components';
import {useVisibility} from '@hooks';

import {ProfileUserResponse} from '@domain';
import {ProfileList} from './ProfileList';
import {SelectedProfileState, SelectEmployeeParamsFunction} from '../types';

type BoxProfileProps = SelectedProfileState & SelectEmployeeParamsFunction;

export function BoxProfile({selectedProfile, selectParams}: BoxProfileProps) {
  const modalVisibilityProps = useVisibility();
  const {close} = modalVisibilityProps;

  const chooseProfile = (profile: ProfileUserResponse) => {
    selectParams({profile});
    close();
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

function OpenModalComponent({selectedProfile}: SelectedProfileState) {
  if (selectedProfile) {
    return (
      <Text color="primaryContrast" textAlign="justify">
        {selectedProfile.name}
      </Text>
    );
  }
  return <Text color="primaryContrast">Selecionar perfil</Text>;
}
