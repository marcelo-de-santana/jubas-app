import {Body, Button, EmptyList, Screen} from '@components';
import {PermissionResponse, usePermissionGetPermissions} from '@domain';
import {UserStackProps} from '@routes';
import {flatListStyle, themeRegistry} from '@styles';
import {mask} from '@utils';
import React, {ReactNode, useEffect} from 'react';
import {View} from 'react-native';
import {number} from 'yup';

export function UserPermissionScreen({
  navigation,
}: UserStackProps<'UserPermissionScreen'>) {
  const {permissions, isLoading, isError, fetchData} =
    usePermissionGetPermissions();

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToUserListScreen = (permission: PermissionResponse) =>
    navigation.navigate('UserListScreen', {
      permission,
    });

  return (
    <Screen style={{flex: 1, padding: 10}}>
      <Body data={permissions} loading={isLoading} error={isError}>
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
      </Body>
    </Screen>
  );
}
