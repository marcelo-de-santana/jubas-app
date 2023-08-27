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
    setTimeout(() => searchUsers(), 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView>
      {users ? (
        users.map(userData => {
          return (
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
          );
        })
      ) : (
        <>
          <Text style={theme.blackTextLargeCenter}>Lista Vazia</Text>
        </>
      )}
    </ScrollView>
  );
}
