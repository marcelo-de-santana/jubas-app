import {ListItem, LoadingScreen, SimpleSeparator} from '@components';
import {useModalContext} from '@contexts';
import {MinimaProfilelResponseDTO, getAllProfilesByUserId} from '@repositories';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {UpdateForm} from './UpdateForm';

type ProfileListProps = {
  children?: React.ReactNode;
  params: Readonly<{
    user: {
      id: string;
      email: string;
    };
  }>;
};

export function ProfileList({children, params}: ProfileListProps) {
  const {user} = params;
  const [profiles, setProfiles] = useState<MinimaProfilelResponseDTO[]>([]);
  const {handleVisibility} = useModalContext();

  async function searchData() {
    setProfiles(await getAllProfilesByUserId(user.id));
  }

  function renderItem({item}: {item: MinimaProfilelResponseDTO}) {
    return (
      <ListItem
        title={item.name}
        onPress={handleVisibility}
        textValues={[
          `CPF: ${item.cpf}`,
          `Status: ${item.statusProfile ? 'ATIVO' : 'INATIVO'}`,
        ]}
      />
    );
  }

  return (
    <>
      <FlatList
        keyExtractor={profile => profile.id}
        data={profiles}
        renderItem={renderItem}
        ItemSeparatorComponent={SimpleSeparator}
        ListEmptyComponent={
          <LoadingScreen
            searchData={searchData}
            title="Nenhum perfil cadastrado"
          />
        }
      />
      <UpdateForm />
    </>
  );
}
