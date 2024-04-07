import {NavigationHeader, Screen, TouchableOpacityItem} from '@components';
import {useModalVisibility} from '@hooks';
import {useState} from 'react';
import {Modal} from 'react-native';
import {ButtonUpdate} from './ButtonUpdate';
import {UserList} from './UserList';

type ModalUpdateUserProps = {userId: string; profileId: string};

export function ModalUpdateUser({userId, profileId}: ModalUpdateUserProps) {
  const {isVisible, handleVisibility} = useModalVisibility({
    initialValue: false,
  });

  const [selectedUserId, setSelectedUserId] = useState(userId);

  const handleSelectedUserId = (userId: string) => {
    setSelectedUserId(userId);
  };

  return (
    <>
      <TouchableOpacityItem
        flex={1}
        flexDirection="column-reverse"
        label="Outras opções"
        onPress={handleVisibility}
      />

      <Modal visible={isVisible} onRequestClose={handleVisibility}>
        <NavigationHeader
          leftIconProps={{onPress: handleVisibility}}
          headerTitleProps={{title: 'Alterar usuário'}}
        />

        <Screen flex={1}>
          <UserList
            handleSelectedUserId={handleSelectedUserId}
            selectedUserId={selectedUserId}
          />
          <ButtonUpdate
            showButton={selectedUserId !== userId}
            profileId={profileId}
            selectedUserId={selectedUserId}
          />
        </Screen>
      </Modal>
    </>
  );
}
