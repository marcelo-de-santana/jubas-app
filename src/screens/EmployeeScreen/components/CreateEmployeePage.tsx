import {DarkBlueButton, ModalForm} from '@components';
import {useState} from 'react';
import {UserList} from './UserList';

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
  const [page, setPage] = useState(0);

  function changePage(pageNumber: number) {
    setPage(pageNumber);
  }

  if (page === 0) {
    return (
      <ModalForm
        formData={formData}
        handleFormData={handleFormData}
        inputOptions={[
          {label: 'name', inputProps: {placeholder: 'Digite o nome'}},
        ]}>
        <DarkBlueButton title="Salvar" onPress={() => changePage(1)} />
      </ModalForm>
    );
  }
  return <UserList id={2} />;
}
