import {
  ButtonComponent,
  EmptyListComponent,
  LoadingScreen,
  Screen,
  TouchableItem,
} from '@components';
import {CategoryResponseDTO, getAllCategories} from '@repositories';
import {BusinessManagementScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function CategoryListScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const [isLoading, setLoading] = useState(false);
  const [category, setCategory] = useState<CategoryResponseDTO[]>([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchData();
    });
  }, [navigation]);

  async function searchData() {
    setLoading(true);
    setCategory(await getAllCategories());
    setLoading(false);
  }

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
        data={category}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
      <ButtonComponent
        type="add"
        onPress={() => navigation.navigate('CategoryCreateScreen')}
      />
    </Screen>
  );
}
