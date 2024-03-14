import {UserStackProps} from '@routes';
import {AddSteelBlue, BoxDetails, EmptyList, Screen} from '@components';
import {useEffect} from 'react';
import {IProfileResponse} from '@domain';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {flatListStyle} from '@styles';
import {mask} from '@utils';
import {useApi} from '@hooks';

export function UserProfileScreen({
  navigation,
  route,
}: Readonly<UserStackProps<'UserProfileScreen'>>) {
  const {userId} = route.params;
  const {data, fetch, status} = useApi.user.getProfilesByUserId();

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetch(userId);
    });
  }, [navigation]);

  /** NAVIGATION FUNCTIONS **/
  const navigateToUserProfileUpdateScreen = (profile: IProfileResponse) =>
    navigation.navigate('UserProfileUpdateScreen', {
      userId,
      profile,
    });

  const navigateToProfileCreate = () =>
    navigation.navigate('UserProfileCreateScreen', {userId});

  /** SCREEN COMPONENTS **/
  function Header() {
    if (data) {
      const navigateToUpdateScreen = () =>
        navigation.navigate('UserUpdateScreen', {user: data});

      return (
        <BoxDetails
          label="Dados de usuário"
          textFields={[
            `E-mail: ${data.email}`,
            `Nível: ${mask.capitalizeFirstLetter(data.permission.type)}`,
          ]}
          onPress={navigateToUpdateScreen}
          boxProps={{disabled: true}}
          textProps={{align: 'justify'}}
        />
      );
    }
  }

  function renderItem({item, index}: ListRenderItemInfo<IProfileResponse>) {
    return (
      <BoxDetails
        label={`Perfil nº: ${index + 1}`}
        textFields={[
          `Nome: ${item.name}`,
          `Status: ${item.statusProfile ? 'ativo' : 'desativado'}`,
          `CPF: ${mask.cpf(item.cpf)}`,
        ]}
        boxProps={{disabled: true}}
        textProps={{align: 'justify'}}
        onPress={() => navigateToUserProfileUpdateScreen(item)}
      />
    );
  }

  return (
    <Screen>
      <FlatList
        data={data?.profiles}
        ListHeaderComponent={Header}
        renderItem={renderItem}
        contentContainerStyle={flatListStyle(data)}
        ListEmptyComponent={<EmptyList title="Nenhum perfil cadastrado" />}
      />
      {status === 200 && <AddSteelBlue onPress={navigateToProfileCreate} />}
    </Screen>
  );
}
