import {ButtonAdd, FlatList, Screen} from '@components';
import {CategorySpecialtiesResponse, categoryUseCases} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {BoxSpecialties} from './components/BoxSpecialties';
import {BoxCategory} from './components/BoxCategory';

export function CategoryListScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'CategoryListScreen'>>) {
  const {data, fetch, isLoading, isError, refresh} =
    categoryUseCases.getCategoriesAndSpecialties();

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetch();
    });
  }, [navigation]);

  function renderItem({item}: ListRenderItemInfo<CategorySpecialtiesResponse>) {
    return (
      <BoxCategory
        category={{id: item.id, name: item.name}}
        navigation={navigation}>
        <BoxSpecialties specialties={item.specialties} navigation={navigation}>
          <ButtonAdd
            iconProps={{color: 'secondaryContrast', size: 20}}
            borderWidth={0}
            marginTop="s0"
            height={40}
            onPress={() => navigation.navigate('SpecialtyCreateScreen')}
          />
        </BoxSpecialties>
      </BoxCategory>
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        isSeparator={false}
        loading={isLoading}
        error={isError}
        refetch={refresh}
        listEmptyTitle="Nenhuma categoria encontrada."
        ListFooterComponent={
          <ButtonAdd
            onPress={() => navigation.navigate('CategoryCreateScreen')}
          />
        }
      />
    </Screen>
  );
}
