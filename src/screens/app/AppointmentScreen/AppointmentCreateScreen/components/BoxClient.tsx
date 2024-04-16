import {
  Box,
  BoxItem,
  FlatList,
  ListSeparator,
  Modal,
  PermissionsMenu,
  Text,
} from '@components';
import {ProfileResponse, useUserGetAll} from '@domain';
import {useVisibility} from '@hooks';
import {mask} from '@utils';
import {useState} from 'react';
import {ClientListItem} from './ClientListItem';

type BoxClientProps = {
  selectedClient?: ProfileResponse;
  handleClient: (client: ProfileResponse) => void;
};

export function BoxClient({selectedClient, handleClient}: BoxClientProps) {
  const modalVisibility = useVisibility();
  const {data: users, isLoading, isError} = useUserGetAll();

  const [userPermission, setUserPermission] = useState<string>('CLIENTE');

  const filteredUsers = users?.filter(
    user => user.permission === userPermission,
  );
  const filterPermission = (permission: string) => {
    setUserPermission(permission.toLocaleUpperCase());
  };

  return (
    <>
      <ListSeparator mb="s12" />
      <BoxItem
        textProps={{variant: 'paragraphMedium', textAlign: 'justify'}}
        label="Descrição do cliente"
      />
      <Modal
        {...modalVisibility}
        OpenModalComponent={
          <OpenModalComponent selectedClient={selectedClient} />
        }>
        <>
          <PermissionsMenu
            filterPermission={filterPermission}
            userPermission={userPermission}
          />

          <FlatList
            data={filteredUsers}
            loading={isLoading}
            error={isError}
            renderItem={prop => (
              <ClientListItem
                {...prop}
                handleClient={handleClient}
                closeModal={modalVisibility.close}
              />
            )}
            ItemSeparatorComponent={() => <ListSeparator mb="s12" />}
          />
        </>
      </Modal>
    </>
  );
}

type OpenModalComponentProps = {
  selectedClient?: ProfileResponse;
};

function OpenModalComponent({
  selectedClient: profile,
}: OpenModalComponentProps) {
  if (profile) {
    return (
      <Box flexDirection="row">
        <BoxItem
          width="50%"
          textProps={{textAlign: 'left', color: 'primaryContrast'}}
          label={'Nome: ' + profile.name}
        />

        <BoxItem
          width="50%"
          textProps={{textAlign: 'right', color: 'primaryContrast'}}
          label={'CPF: ' + mask.cpf(profile.cpf)}
        />
      </Box>
    );
  }

  return <Text>Selecionar cliente</Text>;
}
