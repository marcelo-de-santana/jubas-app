import {ListItem, LoadingScreen, SimpleSeparator} from '@components';
import {useModalContext} from '@contexts';
import {
  MinimaProfilelResponseDTO,
  ProfileRequestDTO,
  getAllProfilesByUserId,
} from '@repositories';
import {useState} from 'react';
import {FlatList} from 'react-native';
import {cpfMask} from '@utils';

type ProfileListProps = {
  handleVisibility: () => void;
  user: {
    id: string;
    email: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<ProfileRequestDTO>>;
};

export function ProfileList({
  handleVisibility,
  user,
  setFormData,
}: ProfileListProps) {
  const [profiles, setProfiles] = useState<MinimaProfilelResponseDTO[]>([]);

  async function searchData() {
    setProfiles(await getAllProfilesByUserId(user.id));
  }

  function openModal(item: MinimaProfilelResponseDTO) {
    setFormData({...item, user});
    handleVisibility();
  }

  function renderItem({item}: {item: MinimaProfilelResponseDTO}) {
    return (
      <ListItem
        title={item.name}
        onPress={() => openModal(item)}
        textValues={[
          `CPF: ${cpfMask(String(item.cpf))}`,
          `Status: ${item.statusProfile ? 'ATIVO' : 'INATIVO'}`,
        ]}
      />
    );
  }

  return (
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
  );
}
