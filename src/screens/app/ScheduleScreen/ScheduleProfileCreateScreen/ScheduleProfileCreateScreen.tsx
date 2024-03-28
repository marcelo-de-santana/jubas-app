import {
  ButtonTwoOptions,
  FormTextInputCpf,
  FormTextInputName,
  ModalStatus,
  Screen,
} from '@components';
import {useAuthContext} from '@contexts';
import {profileUseCases} from '@domain';
import {useForm} from '@hooks';
import {ScheduleStackProps} from '@routes';
import {mask} from '@utils';

export function ScheduleProfileCreateScreen({
  navigation,
}: Readonly<ScheduleStackProps<'ScheduleProfileCreateScreen'>>) {
  const {user} = useAuthContext();

  const {fetch, isLoading, status} = profileUseCases.create();

  const formik = useForm({
    initialValues: {
      name: '',
      cpf: '',
    },
    onSubmit: () => {
      if (user) {
        fetch({
          cpf: mask.removeCpf(formik.values.cpf),
          name: formik.values.name,
          statusProfile: true,
          userId: user.id,
        });
      }
    },
  });

  return (
    <Screen>
      <ModalStatus
        status={status}
        errorAction={navigation.goBack}
        successAction={navigation.goBack}
      />
      <FormTextInputName formik={formik} name="name" label="Nome" />
      <FormTextInputCpf formik={formik} name="cpf" label="CPF" />
      <ButtonTwoOptions
        cancelButtonProps={{onPress: navigation.goBack, loading: isLoading}}
        confirmButtonProps={{onPress: formik.handleSubmit, loading: isLoading}}
      />
    </Screen>
  );
}
