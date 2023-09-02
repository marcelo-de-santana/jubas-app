import {text, theme} from '@styles';
import {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MinimalUserResponseDTO, getAllUsersRepo} from '@repositories';
import {EmptyListScreen, SimpleListItem, LoadingScreen} from '@components';

type UserListProps = {
  openModalAlterUser: (userData: MinimalUserResponseDTO) => void;
};

export function UserList({openModalAlterUser}: UserListProps) {
  const [users, setUsers] = useState<MinimalUserResponseDTO[]>([]);

  async function searchData() {
    setUsers(await getAllUsersRepo());
  }

  function renderItem({item}: {item: MinimalUserResponseDTO}) {
    return (
      <SimpleListItem textValues={[item.email]} />
    );
  }

  return (


    <FlatList
      data={users}
      keyExtractor={users => users.id}
      renderItem={renderItem}
      ListEmptyComponent={
        <LoadingScreen
          searchData={searchData}
          title="Lista de Usuários Vazia"
        />
      }
    />
  );

}
