import {LoadingScreen, Screen} from '@components';
import {MinimalUserResponseDTO, getAllUsersRepo} from '@repositories';
import {theme} from '@styles';
import {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ModalCreateUser} from './components/ModalCreateUser';

export function UsersScreen() {
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState<MinimalUserResponseDTO[]>([]);
  useEffect(() => {
    setTimeout(() => searchUsers(), 2000);
  }, []);

  async function searchUsers() {
    const response = await getAllUsersRepo();
    setUsers(response);
    setLoading(false);
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <ScrollView>
        {users ? (
          users.map(item => {
            const {id, email, userPermission} = item;
            return (
              <View key={id} style={theme.blueBoxItems}>
                <TouchableOpacity style={theme.greyBoxItemsFlex}>
                  <Text style={theme.darkBlueTextSmall}>{email}</Text>
                  <Text style={theme.darkBlueTextSmall}>
                    {userPermission.type}
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

    

      <ModalCreateUser/>
    </Screen>
  );
}
