import {UserStackProps} from '@routes';
import {BoxDetails, EmptyList, Icon, Screen} from '@components';
import {useEffect} from 'react';
import {IProfileResponse, useUserProfileListByUser} from '@domain';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {flatListStyle} from '@styles';
import {mask} from '@utils';

export function UserProfileScreen({
  navigation,
  route,
}: UserStackProps<'UserProfileScreen'>) {
  const {userId} = route.params;
  const {user, fetchData, status} = useUserProfileListByUser();

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData({userId});
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
    if (user) {
      const navigateToUpdateScreen = () =>
        navigation.navigate('UserUpdateScreen', {user: user});

      return (
        <BoxDetails
          label="Dados de usuário"
          textFields={[
            `E-mail: ${user.email}`,
            `Permissão: ${user.permission.type}`,
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

  function AddButton() {
    if (status === 200) {
      return (
        <Icon
          name="AddIcon"
          type="floating"
          backgroundColor="steelBlue"
          color="white"
          size={35}
          onPress={navigateToProfileCreate}
        />
      );
    }
  }

  return (
    <Screen>
      <FlatList
        data={user?.profiles}
        ListHeaderComponent={Header}
        renderItem={renderItem}
        contentContainerStyle={flatListStyle(user)}
        ListEmptyComponent={<EmptyList title="Nenhum perfil cadastrado" />}
      />
      <AddButton />
    </Screen>
  );
}
