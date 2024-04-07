import {TouchableOpacityItem} from '@components';
import {UserResponse} from '@domain';
import {ListRenderItemInfo} from 'react-native';

export function UserListItem({
  item: user,
  selectedUserId,
  handleSelectedUserId,
}: ListRenderItemInfo<UserResponse> & {
  selectedUserId: string;
  handleSelectedUserId: (userId: string) => void;
}) {
  const isSelected = user.id === selectedUserId;

  return (
    <TouchableOpacityItem
      padding="s12"
      textProps={{
        textAlign: 'justify',
        color: isSelected ? 'secondaryContrast' : 'primaryContrast',
      }}
      disabled={isSelected}
      onPress={() => handleSelectedUserId(user.id)}
      label={user.email}
    />
  );
}
