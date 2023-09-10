import {ListItem, LoadingScreen, SimpleSeparator} from '@components';
import {useModalContext} from '@contexts';
import {
  MinimaProfilelResponseDTO,
  ProfileRequestDTO,
  getAllProfilesByUserId,
} from '@repositories';
import {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {UpdateForm} from './UpdateForm';
import {cpfMask} from '@utils';

type ProfileListProps = {
  children?: React.ReactNode;
  goBack(): void;
  params: Readonly<{
    user: {
      id: string;
      email: string;
    };
  }>;
};

export function ProfileList({children, goBack, params}: ProfileListProps) {
  const {user} = params;
  const [profiles, setProfiles] = useState<MinimaProfilelResponseDTO[]>([]);

  const initialValues = {
    id: '',
    name: '',
    cpf: 0,
    statusProfile: false,
    user,
  };
  const [formData, setFormData] = useState<ProfileRequestDTO>(initialValues);
  const {handleVisibility} = useModalContext();

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
      <UpdateForm
        goBack={goBack}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}
