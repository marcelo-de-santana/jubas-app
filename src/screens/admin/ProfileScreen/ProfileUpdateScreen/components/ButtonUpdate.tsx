import {ButtonSuccess, ModalStatus} from '@components';
import {useProfileUpdate} from '@domain';
import {useNavigation} from '@react-navigation/native';

type ButtonUpdateProps = {
  showButton: boolean;
  profileId: string;
  selectedUserId: string;
};

export function ButtonUpdate({
  showButton,
  profileId,
  selectedUserId,
}: ButtonUpdateProps) {
  const mutation = useProfileUpdate();

  const updateProfile = () => {
    mutation.mutate({
      id: profileId,
      userId: selectedUserId,
    });
  };

  const {goBack} = useNavigation();

  const popTwoScreens = () => {
    goBack();
    goBack();
  };

  if (showButton) {
    return (
      <>
        <ModalStatus {...mutation} successAction={popTwoScreens} />
        <ButtonSuccess
          backgroundColor="secondaryContrast"
          textProps={{variant: 'paragraphMedium', color: 'secondary'}}
          onPress={updateProfile}
          title="Salvar"
        />
      </>
    );
  }
}
