import {UserProfileProps} from '@routes';
import {
  ButtonComponent,
  EmptyListComponent,
  LoadingScreen,
  Screen,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {useEffect, useState} from 'react';
import {ProfileResponseDTO, getAllProfilesByUserId} from '@repositories';
import {FlatList} from 'react-native';
import {cpfMask} from '@utils';

export function UserProfileScreen({navigation, route}: UserProfileProps) {
  const {id, email, userPermission} = route.params.user;

  const [profiles, setProfiles] = useState<ProfileResponseDTO[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchData();
    });
  }, []);

  async function searchData() {
    setIsVisible(true);
    setProfiles(await getAllProfilesByUserId(id));
    setIsVisible(false);
  }

  function ListHeaderComponent() {
    return (
      <>
        <TouchableItem
          type="box-items-header"
          onPress={() => navigation.navigate('UserUpdateScreen', route.params)}
          textProps={{align: 'justify'}}
          textValues={[`Usuário: ${email}`]}>
          <TouchableItem
            textValues={[`Nível: ${userPermission.id}`]}
            disabled
          />
        </TouchableItem>
        <ViewSeparator />
      </>
    );
  }

  function renderItem({item}: {item: ProfileResponseDTO}) {
    return (
      <TouchableItem
        type="box-items-header"
        textValues={[item.name]}
        textProps={{align: 'justify'}}
        onPress={() =>
          navigation.navigate('UserProfileUpdateScreen', {
            userId: id,
            profile: {...item},
          })
        }>
        <TouchableItem
          type="box-flex-row-list"
          textValues={[
            `CPF: ${cpfMask(item.cpf)}`,
            `Status: ${item.statusProfile ? 'ATIVO' : 'INATIVO'}`,
          ]}
          disabled
        />
      </TouchableItem>
    );
  }

  if (isVisible) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <FlatList
        keyExtractor={profile => profile.id}
        data={profiles}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
        ItemSeparatorComponent={ViewSeparator}
        ListEmptyComponent={EmptyListComponent({
          title: 'Nenhum perfil cadastrado',
        })}
      />

      <ButtonComponent
        type="add"
        onPress={() =>
          navigation.navigate('UserProfileCreateScreen', {userId: id})
        }
      />
    </Screen>
  );
}
