import {
  ButtonSuccess,
  FormTextInput,
  Modal,
  ModalStatus,
  Text,
  TextInput,
  TouchableOpacity,
} from '@components';
import {UserResponse, useUserUpdate} from '@domain';
import {useForm, useVisibility} from '@hooks';
import { schemas } from '@utils';
import {ReactNode, useState} from 'react';

type ModalUserProps = {children: ReactNode; user: UserResponse};

export function ModalUser({children, user}: ModalUserProps) {
  const modalVisibility = useVisibility();

  return (
    <Modal {...modalVisibility} OpenModalComponent={children}>
      <>
        <TextInput
          label="E-mail"
          keyboardType="email-address"
          placeholder={'joao@exemplo.com'}
          maxLength={50}
          value={user?.email}
          editable={false}
        />

        <PasswordForm
          user={user}
          handleModalVisibility={modalVisibility.handleVisibility}
        />
      </>
    </Modal>
  );
}

function PasswordForm({
  user,
  handleModalVisibility,
}: Pick<ModalUserProps, 'user'> & {handleModalVisibility: () => void}) {
  const [showForm, setShowForm] = useState(false);

  const {mutate, isPending, isError, isSuccess} = useUserUpdate();

  const formik = useForm({
    initialValues: {password: '', checkPass: ''},
    validationSchema: schemas.newPassword,
    onSubmit: values => mutate({userId: user?.id, password: values.password}),
  });

  if (showForm) {
    return (
      <>
        <ModalStatus
          isError={isError}
          isSuccess={isSuccess}
          successAction={handleModalVisibility}
        />
        <FormTextInput
          formik={formik}
          name="password"
          label="Nova senha"
          placeholder="********"
          maxLength={20}
          secureTextEntry
        />
        <FormTextInput
          formik={formik}
          name="checkPass"
          label="Confirmar nova senha"
          placeholder="********"
          maxLength={20}
          secureTextEntry
        />
        <ButtonSuccess
          loading={isPending}
          backgroundColor="primaryContrast"
          marginTop="s20"
          title="Salvar"
          textProps={{variant: 'paragraphLarge', color: 'primary'}}
          onPress={formik.handleSubmit}
        />
      </>
    );
  }

  return (
    <TouchableOpacity padding="s32" onPress={() => setShowForm(true)}>
      <Text>Alterar senha</Text>
    </TouchableOpacity>
  );
}
