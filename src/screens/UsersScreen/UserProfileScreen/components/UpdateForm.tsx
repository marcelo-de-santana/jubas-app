import {
  BlueButton,
  DecisionAlert,
  ModalForm,
  ModalScreen,
  SwitchButtons,
} from '@components';
import {useModalContext} from '@contexts';
import {ProfileRequestDTO, updateProfile} from '@repositories';
import {theme} from '@styles';
import {cpfMask} from '@utils';

type UpdateFormProps = {
  goBack(): void;
  formData: ProfileRequestDTO;
  setFormData: React.Dispatch<React.SetStateAction<ProfileRequestDTO>>;
};

export function UpdateForm({goBack, formData, setFormData}: UpdateFormProps) {
  const {isVisible, handleVisibility} = useModalContext();

  function handleFormData(key: string, value: string | number | boolean) {
    setFormData(prev => ({...prev, [key]: value}));
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
            onChangeText: text => handleFormData('email', text),
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
