import {
  BlueButton,
  DecisionAlert,
  ModalForm,
  ModalScreen,
  SwitchButtons,
} from '@components';
import {ProfileRequestDTO, updateProfile} from '@repositories';
import {theme} from '@styles';
import {cpfMask} from '@utils';

type UpdateFormProps = {
  formData: ProfileRequestDTO;
  setFormData: React.Dispatch<React.SetStateAction<ProfileRequestDTO>>;
  isVisible: boolean;
  handleVisibility: () => void;
  goBack(): void;
};

export function UpdateForm({
  formData,
  setFormData,
  isVisible,
  handleVisibility,
  goBack,
}: UpdateFormProps) {
  function handleFormData(key: string, value: string | number | boolean) {
    setFormData(prev => ({...prev, [key]: value}));
  }

  function handleUserOfFormData(key: string, value: string | number | boolean) {
    setFormData(prev => ({...prev, user: {...prev.user, [key]: value}}));
  }

  function confirmSend() {
    DecisionAlert({
      message: 'Deseja salvar as alterações?',
      onPress: sendForm,
    });
    async function sendForm() {
      await updateProfile(formData);
      handleVisibility();
      goBack();
    }
  }

  return (
    <ModalScreen visible={isVisible} handleVisibility={handleVisibility}>
      <ModalForm
        inputProps={[
          {
            placeholder: 'E-mail',
            value: formData.user.email,
            onChangeText: text => handleUserOfFormData('email', text),
          },
          {
            placeholder: 'Nome',
            value: formData.name,
            onChangeText: text => handleFormData('name', text),
          },
          {
            placeholder: 'CPF',
            maxLength: 14,
            value: cpfMask(String(formData.cpf)),
            onChangeText: text => handleFormData('cpf', text),
          },
        ]}>
        <SwitchButtons
          style={theme.boxItems}
          switchOptions={[
            {
              title: 'Status',
              switchProps: {
                value: formData.statusProfile,
                onValueChange: () =>
                  handleFormData('statusProfile', !formData.statusProfile),
              },
            },
          ]}
        />
        <BlueButton title="Salvar" onPress={confirmSend} />
      </ModalForm>
    </ModalScreen>
  );
}
