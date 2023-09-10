import {UserProfileProps} from '@routes';
import {ProfileList} from './components/ProfileList';
import {Screen} from '@components';
import {ModalProvider} from '@contexts';
import {UpdateForm} from './components/UpdateForm';
import {useState} from 'react';
import {ProfileRequestDTO} from '@repositories';

export function UserProfileScreen({navigation, route}: UserProfileProps) {
  const {user} = route.params;
  const initialValues = {
    id: '',
    name: '',
    cpf: 0,
    statusProfile: false,
    user,
  };
  const [formData, setFormData] = useState<ProfileRequestDTO>(initialValues);

  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <Screen>
      <ProfileList
        handleVisibility={handleVisibility}
        setFormData={setFormData}
        user={user}
      />
      <UpdateForm
        formData={formData}
        setFormData={setFormData}
        isVisible={isVisible}
        handleVisibility={handleVisibility}
        goBack={navigation.goBack}
      />
    </Screen>
  );
}
