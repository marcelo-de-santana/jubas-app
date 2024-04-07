import {Screen, UserForm} from '@components';
import {useForm} from '@hooks';
import {schemas} from '@utils';
import {useUserCreate} from '@domain';

export function UserCreateScreen() {
  const {mutate, isPending, isError, isSuccess} = useUserCreate();

  const formik = useForm({
    validationSchema: schemas.userRequest,
    initialValues: {
      email: '',
      password: '',
      permission: 'CLIENTE',
    },
    onSubmit: values => {
      mutate({
        email: values.email,
        password: values.password,
        permission: values.permission,
      });
    },
  });

  return (
    <Screen scrollable>
      <UserForm
        formik={formik}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Screen>
  );
}
