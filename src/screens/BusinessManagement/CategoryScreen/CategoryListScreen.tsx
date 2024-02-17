import {AddSteelBlue, BoxItem, EmptyList, Screen, Separator} from '@components';
import {CategoryResponse, useCategoryList} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function CategoryListScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'CategoryListScreen'>>) {
  const {categoryList, isLoading, isError, fetchData} = useCategoryList();

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData();
    });
  }, [navigation]);

  function renderItem({item}: ListRenderItemInfo<CategoryResponse>) {
    return (
      <BoxItem
        style={{paddingVertical: 20}}
        label={item.name}
        onPress={() =>
          navigation.navigate('CategoryUpdateScreen', {category: item})
        }
      />
    );
  }

  return (
    <Screen>
      <FlatList
        style={flatListStyle(categoryList)}
        data={categoryList}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={
          <EmptyList
            title="Nenhuma categoria encontrada."
            loading={isLoading}
            error={isError}
            refetch={fetchData}
          />
        }
      />
      <AddSteelBlue
        onPress={() => navigation.navigate('CategoryCreateScreen')}
      />
    </Screen>
  );
}
