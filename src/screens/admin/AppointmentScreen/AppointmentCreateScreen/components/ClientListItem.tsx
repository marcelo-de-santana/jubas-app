import {BoxItem, Text, TouchableOpacity} from '@components';
import {ProfileResponse, UserProfileResponse} from '@domain';
import {mask} from '@utils';
import {ListRenderItemInfo} from 'react-native';

type ClientListItemProps = {
  handleClient: (client: ProfileResponse) => void;
  closeModal: () => void;
} & ListRenderItemInfo<UserProfileResponse>;

export function ClientListItem({
  handleClient,
  closeModal,
  item: user,
}: ClientListItemProps) {
  return (
    <>
      <Text pb="s12" textAlign="justify">
        {user.email}
      </Text>
      {user.profiles && user.profiles.length > 0 ? (
        <ProfileItems
          profiles={user.profiles}
          handleClient={handleClient}
          closeModal={closeModal}
        />
      ) : (
        <Text p="s12" mb="s12" color="primaryContrast">
          Nenhum perfil atribuído
        </Text>
      )}
    </>
  );
}

type ProfileItemsProps = {
  profiles: ProfileResponse[];
  handleClient: (client: ProfileResponse) => void;
  closeModal: () => void;
};

function ProfileItems({profiles, handleClient, closeModal}: ProfileItemsProps) {
  return profiles.map(profile => {
    const onChangeClient = () => {
      handleClient(profile);
      closeModal();
    };

    return (
      <TouchableOpacity
        key={profile.id}
        activeOpacity={0.8}
        flexDirection="row"
        bg="secondaryContrast"
        borderRadius="s6"
        p="s12"
        mb="s12"
        onPress={onChangeClient}>
        <BoxItem
          width="50%"
          textProps={{textAlign: 'left', color: 'secondary'}}
          label={'Nome: ' + profile.name}
        />

        <BoxItem
          width="50%"
          textProps={{textAlign: 'right', color: 'secondary'}}
          label={'CPF: ' + mask.cpf(profile.cpf)}
        />
      </TouchableOpacity>
    );
  });
}
