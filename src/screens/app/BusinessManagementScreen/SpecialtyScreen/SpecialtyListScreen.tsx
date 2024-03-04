import {BoxItem, EmptyList, Icon, Screen, Separator} from '@components';
import {SpecialtyResponse, useSpecialtyList} from '@domain';
import {BusinessManagementScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList} from 'react-native';

export function SpecialtyListScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const {data, getList} = useSpecialtyList();

  function renderItem({item}: {item: SpecialtyResponse}) {
    return <BoxItem style={{paddingVertical: 20}} label="teste de valores" />;
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={flatListStyle(data)}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<EmptyList title="Lista vazia." />}
      />
      <Icon
        name="AddIcon"
        type="floating"
        backgroundColor="steel-blue"
        size={35}
        color="light-gray"
        onPress={() => navigation.navigate('SpecialtyCreateScreen')}
      />
    </Screen>
  );
}
