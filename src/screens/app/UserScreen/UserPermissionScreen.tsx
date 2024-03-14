import {Button, Screen} from '@components';
import {PermissionResponse} from '@domain';
import {UserStackProps} from '@routes';
import {themeRegistry} from '@styles';
import {mask} from '@utils';
import {View} from 'react-native';

export function UserPermissionScreen({
  navigation,
}: Readonly<UserStackProps<'UserPermissionScreen'>>) {
  const navigateToUserListScreen = (permission: PermissionResponse) =>
    navigation.navigate('UserListScreen', {
      permission,
    });

  const permissions: PermissionResponse[] = [
    {id: 1, type: 'admins'},
    {id: 2, type: 'barbeiros'},
    {id: 3, type: 'clientes'},
  ];

  return (
    <Screen style={{flex: 1, padding: 10}}>
      <View style={themeRegistry.boxFlexRow}>
        {permissions?.map(permission => (
          <Button
            type="box"
            key={permission.id}
            title={mask.capitalizeFirstLetter(permission?.type)}
            onPress={() => navigateToUserListScreen(permission)}
          />
        ))}
      </View>
    </Screen>
  );
}
