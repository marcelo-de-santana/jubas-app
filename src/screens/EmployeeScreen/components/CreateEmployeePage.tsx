import {DarkBlueButton, InputOptionsButton, ModalForm} from '@components';
import {useState} from 'react';
import {UserList} from './UserList';
import {createBarberRepo} from '@repositories';
import {Text, TouchableOpacity} from 'react-native';

export type CreateEmployeePageProps = {
  formData: any;
  handleFormData: (key: string, value: string) => void;
  handleVisibility: () => void;
};

export function CreateEmployeePage({
  formData,
  handleFormData,
  handleVisibility,
}: CreateEmployeePageProps) {
  async function registerBarber() {
    await createBarberRepo({
      name: formData.name,
      user: {
        id: formData.user.id,
      },
    });
    handleVisibility();
  }

  function selectEmail() {}

  return (
    <ModalForm
      formData={formData}
      handleFormData={handleFormData}
      inputOptions={[
        {label: 'name', inputProps: {placeholder: 'Digite o nome'}},
      ]}>
      <InputOptionsButton title="Selecionar e-mail">
        <UserList id={2} handleFormData={handleFormData} />
      </InputOptionsButton>
      <DarkBlueButton title="Confirmar" />
    </ModalForm>
  );
}
