import {UserProfileProps} from '@routes';
import {
  ButtonIcon,
  EmptyListScreen,
  Icon,
  ListItem,
  LoadingScreen,
  Screen,
  SimpleSeparator,
} from '@components';
import {useEffect, useState} from 'react';
import {MinimaProfilelResponseDTO, getAllProfilesByUserId} from '@repositories';
import {FlatList, Pressable} from 'react-native';
import {cpfMask} from '@utils';

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
      <ListItem
        onPress={() => navigation.navigate('UserUpdateScreen', route.params)}
        title={`Usuário: ${user.email}`}
        textValues={[`Nível: ${user.userPermission.id}`]}
      />
    );
  }

  function renderItem({item}: {item: MinimaProfilelResponseDTO}) {
    return (
      <ListItem
        title={item.name}
        onPress={() =>
          navigation.navigate('UserProfileUpdateScreen', {
            profile: {...item, user: {...user}},
          })
        }
        textValues={[
          `CPF: ${cpfMask(String(item.cpf))}`,
          `Status: ${item.statusProfile ? 'ATIVO' : 'INATIVO'}`,
        ]}
      />
    );
  }

  function ListEmptyComponent() {
    return <EmptyListScreen title="Nenhum perfil cadastrado" />;
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
        ItemSeparatorComponent={SimpleSeparator}
        ListEmptyComponent={ListEmptyComponent}
      />

      <ButtonIcon
        color="#3C4659"
        onPress={() =>
          navigation.navigate('UserProfileCreateScreen', route.params)
        }>
        <Icon name="AddCircleIcon" color="#F2F2F2" size={40} />
      </ButtonIcon>
    </Screen>
  );
}
