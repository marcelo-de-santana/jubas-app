import {
  ButtonSuccess,
  FormTextInputCpf,
  FormTextInputName,
  Modal,
} from '@components';
import {ProfileResponse} from '@domain';
import {useForm, useVisibility} from '@hooks';
import {mask, schemas} from '@utils';
import {ReactNode} from 'react';

type ModalProfileProps = {
  children: ReactNode;
  profile?: ProfileResponse;
  isCpfEditable?: boolean;
  sendProfile: (
    updatedProfile: Omit<ProfileResponse, 'id' | 'statusProfile'>,
  ) => void;
  isPending: boolean;
};

export function ModalProfile({
  children,
  profile,
  isCpfEditable = false,
  isPending,
  sendProfile,
}: ModalProfileProps) {
  const modalVisibility = useVisibility();

  const {name, cpf} = profile || {name: '', cpf: ''};
  const initialValues = {
    name,
    cpf: mask.cpf(cpf),
  };

  const formik = useForm({
    initialValues: initialValues,
    validationSchema: schemas.profileRequest,
    onSubmit: values => {
      sendProfile({name: values.name, cpf: mask.removeCpf(values.cpf)});
      modalVisibility.handleVisibility();
    },
  });

  return (
    <Modal {...modalVisibility} OpenModalComponent={children}>
      <FormTextInputName formik={formik} name="name" label="Nome" />
      <FormTextInputCpf
        formik={formik}
        name="cpf"
        label="CPF"
        editable={isCpfEditable}
      />
      <ButtonSuccess
        loading={isPending}
        backgroundColor="primaryContrast"
        marginTop="s20"
        title="Salvar"
        textProps={{variant: 'paragraphLarge', color: 'primary'}}
        onPress={formik.handleSubmit}
      />
    </Modal>
  );
}
