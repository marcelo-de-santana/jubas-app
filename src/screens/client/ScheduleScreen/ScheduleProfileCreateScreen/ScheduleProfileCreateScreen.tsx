import {
  ButtonTwoOptions,
  FormTextInputCpf,
  FormTextInputName,
  ModalStatus,
  Screen,
} from '@components';
import {useProfileCreate} from '@domain';
import {useForm} from '@hooks';
import {ScheduleStackProps} from '@routes';
import {useAuthStore} from '@services';
import {mask} from '@utils';

export function ScheduleProfileCreateScreen({
  navigation,
}: Readonly<ScheduleStackProps<'ScheduleProfileCreateScreen'>>) {
  const {user} = useAuthStore();

  const {mutate, isPending, isError, isSuccess} = useProfileCreate();

  const formik = useForm({
    initialValues: {
      name: '',
      cpf: '',
    },
    onSubmit: values => {
      if (user) {
        mutate({
          cpf: mask.removeCpf(values.cpf),
          name: values.name,
          statusProfile: true,
          userId: user.id,
        });
      }
    },
  });

  return (
    <Screen>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        errorAction={navigation.goBack}
        successAction={navigation.goBack}
      />
      <FormTextInputName formik={formik} name="name" label="Nome" />
      <FormTextInputCpf formik={formik} name="cpf" label="CPF" />
      <ButtonTwoOptions
        cancelButtonProps={{onPress: navigation.goBack, loading: isPending}}
        confirmButtonProps={{onPress: formik.handleSubmit, loading: isPending}}
      />
    </Screen>
  );
}
