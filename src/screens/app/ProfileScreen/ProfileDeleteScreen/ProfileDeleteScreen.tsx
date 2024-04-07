import {BoxDelete, Text} from '@components';
import {useProfileRemove} from '@domain';
import {UserStackProps} from '@routes';
import {mask} from '@utils';

export function ProfileDeleteScreen({
  navigation,
  route,
}: UserStackProps<'ProfileDeleteScreen'>) {
  const {id, name, cpf} = route.params.profile;

  const {mutate, isError, isSuccess, isPending} = useProfileRemove();

  const sendToDeleteProfile = () => {
    mutate(id);
  };

  const popThreeScreens = () => {
    navigation.pop();
    navigation.pop();
    navigation.pop();
  };

  return (
    <BoxDelete
      isLoading={isPending}
      modalStatusProps={{
        isError,
        isSuccess,
        successAction: popThreeScreens,
        errorAction: popThreeScreens,
      }}
      buttonProps={{
        cancelButtonProps: {onPress: navigation.goBack},
        confirmButtonProps: {onPress: sendToDeleteProfile},
      }}>
      <Text variant="paragraphMedium" color="primary" textAlign="justify">
        {'Nome: ' + name}
      </Text>
      <Text variant="paragraphMedium" color="primary" textAlign="justify">
        {'CPF: ' + mask.cpf(cpf)}
      </Text>
    </BoxDelete>
  );
}
