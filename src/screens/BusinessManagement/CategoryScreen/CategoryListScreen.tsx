import {
  ButtonComponent,
  EmptyListComponent,
  LoadingScreen,
  Screen,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {CategoryResponseDTO, useCategoryCreate, useCategoryList} from '@domain';
import {BusinessManagementScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function CategoryListScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const {categoryList, isLoading, refresh} = useCategoryList();

  // useEffect(() => {
  //   navigation.addListener('focus', () => {
  //     searchData();
  //   });
  // }, [navigation]);

  function renderItem({item}: {item: CategoryResponseDTO}) {
    return (
      <TouchableItem
        textValues={[item.name]}
        onPress={() =>
          navigation.navigate('CategoryUpdateScreen', {category: item})
        }
      />
    );
  }

  function ListEmptyComponent() {
    return <EmptyListComponent title="Nenhuma categoria encontrada." />;
  }

  if (isLoading) <LoadingScreen />;

  return (
    <Screen>
      <FlatList
        data={categoryList}
        renderItem={renderItem}
        ItemSeparatorComponent={ViewSeparator}
        ListEmptyComponent={ListEmptyComponent}
      />
      <ButtonComponent
        type="add"
        onPress={() => navigation.navigate('CategoryCreateScreen')}
      />
    </Screen>
  );
}
