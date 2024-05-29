import {Screen, UserForm} from '@components';
import {useUserUpdate} from '@domain';
import {useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {schemas} from '@utils';

export function UserUpdateScreen({
  route,
}: Readonly<UserStackProps<'UserUpdateScreen'>>) {
  const {user} = route.params;
  const {mutate, isError, isPending, isSuccess} = useUserUpdate();

  const formik = useForm({
    validationSchema: schemas.userUpdate,
    initialValues: {
      id: user.id,
      email: user.email,
      password: '',
      permission: user.permission,
    },
    onSubmit: values => {
      mutate({
        userId: values.id,
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
        isError={isError}
        isPending={isPending}
        isSuccess={isSuccess}
      />
    </Screen>
  );
}
