import {theme} from '@styles';
import {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MinimalUserResponseDTO, getAllUsersRepo} from '@repositories';
import {LoadingScreen} from '@components';

type UserListProps = {
  openModalAlterUser: (userData: MinimalUserResponseDTO) => void;
};

export function UserList({openModalAlterUser}: UserListProps) {
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState<MinimalUserResponseDTO[]>([]);

  function changeLoading() {
    setLoading(!loading);
  }

  async function searchUsers() {
    const response = await getAllUsersRepo();
    setUsers(response);
    changeLoading();
  }

  useEffect(() => {
    searchUsers();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (users.length > 0) {
    return (
      <ScrollView>
        {users.map(userData => (
          <View key={userData.id} style={theme.blueBoxItems}>
            <TouchableOpacity
              style={theme.greyBoxItemsFlex}
              onPress={() => openModalAlterUser(userData)}>
              <Text style={theme.darkBlueTextSmall}>{userData.email}</Text>
              <Text style={theme.darkBlueTextSmall}>
                {userData.userPermission.type}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  } else {
    return (
      <View style={theme.containerJustifyCenter}>
        <Text style={theme.blackTextLargeCenter}>Lista de Usuários Vazia</Text>
      </View>
    );
  }
}
