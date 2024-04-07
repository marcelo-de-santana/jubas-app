import {IconNavigation, ProfileForm, Screen} from '@components';
import {useProfileUpdate} from '@domain';
import {useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {mask, schemas} from '@utils';
import {ModalUpdateUser} from './components/ModalUpdateUser';
import {useLayoutEffect} from 'react';

export function ProfileUpdateScreen({
  navigation,
  route,
}: UserStackProps<'ProfileUpdateScreen'>) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconNavigation
          name="TrashIcon"
          size={25}
          routeName="ProfileDeleteScreen"
          params={route.params}
        />
      ),
    });
  }, []);

  const {profile, userId} = route.params;

  const mutation = useProfileUpdate();

  const formik = useForm({
    validationSchema: schemas.profileRequest,
    initialValues: {
      name: profile.name,
      cpf: profile.cpf,
      statusProfile: profile.statusProfile,
    },
    onSubmit: values => {
      mutation.mutate({
        id: profile.id,
        cpf: mask.removeCpf(values.cpf),
        name: values.name,
        statusProfile: true,
      });
    },
  });

  return (
    <Screen flex={1}>
      <ProfileForm formik={formik} {...mutation} />
      <ModalUpdateUser userId={userId} profileId={profile.id} />
    </Screen>
  );
}
