import {UserProfileProps} from '@routes';
import {
  ButtonOpacity,
  EmptyListComponent,
  Icon,
  LoadingScreen,
  Screen,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {useEffect, useState} from 'react';
import {MinimaProfilelResponseDTO, getAllProfilesByUserId} from '@repositories';
import {FlatList} from 'react-native';
import {cpfMask} from '@utils';
import {themeRegistry} from '@styles';

export function UserProfileScreen({navigation, route}: UserProfileProps) {
  const {user} = route.params;

  const [profiles, setProfiles] = useState<MinimaProfilelResponseDTO[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchData();
    });
  }, []);

  async function searchData() {
    setIsVisible(true);
    setProfiles(await getAllProfilesByUserId(user.id));
    setIsVisible(false);
  }

  function ListHeaderComponent() {
    return (
      <>
        <TouchableItem
          type="box-items-header"
          onPress={() => navigation.navigate('UserUpdateScreen', route.params)}
          textProps={{align: 'justify'}}
          textValues={[`Usuário: ${user.email}`]}>
          <TouchableItem
            textValues={[`Nível: ${user.userPermission.id}`]}
            disabled
          />
        </TouchableItem>
        <ViewSeparator />
      </>
    );
  }

  function renderItem({item}: {item: MinimaProfilelResponseDTO}) {
    return (
      <TouchableItem
        type="box-items-header"
        textValues={[item.name]}
        textProps={{align: 'justify'}}
        onPress={() =>
          navigation.navigate('UserProfileUpdateScreen', {
            profile: {...item, user: {...user}},
          })
        }>
        <TouchableItem
          type="box-flex-row-list"
          textValues={[
            `CPF: ${cpfMask(String(item.cpf))}`,
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

      <ButtonOpacity
        color="steel-blue"
        type="square-right"
        onPress={() =>
          navigation.navigate('UserProfileCreateScreen', route.params)
        }>
        <Icon name="AddCircleIcon" color="white" size={40} />
      </ButtonOpacity>
    </Screen>
  );
}
