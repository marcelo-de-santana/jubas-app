import {ProfileForm, Screen} from '@components';
import {useProfileCreate} from '@domain';
import {useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {mask, schemas} from '@utils';

export function ProfileCreateScreen({
  route,
}: UserStackProps<'ProfileCreateScreen'>) {
  const {userId} = route.params;
  const mutation = useProfileCreate();

  const formik = useForm({
    validationSchema: schemas.profileRequest,
    initialValues: {
      name: '',
      cpf: '',
      statusProfile: true,
    },
    onSubmit: ({cpf, name, statusProfile}) => {
      mutation.mutate({
        cpf: mask.removeCpf(cpf),
        name,
        statusProfile,
        userId,
      });
    },
  });

  return (
    <Screen>
      <ProfileForm formik={formik} {...mutation} />
    </Screen>
  );
}
