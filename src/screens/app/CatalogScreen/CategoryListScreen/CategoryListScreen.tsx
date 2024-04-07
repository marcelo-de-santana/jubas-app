import {ButtonAdd, FlatList, Screen} from '@components';
import {
  CategorySpecialtiesResponse,
  SpecialtyResponse,
  useCategoryGetAll,
} from '@domain';
import {CatalogStackProps} from '@routes';
import {ListRenderItemInfo} from 'react-native';
import {BoxSpecialties} from './components/BoxSpecialties';
import {BoxCategory} from './components/BoxCategory';
import {useLayoutEffect} from 'react';
import {AddButton} from './components/AddButton';

export function CategoryListScreen({
  navigation,
}: CatalogStackProps<'CategoryListScreen'>) {
  useLayoutEffect(() => {
    navigation.setOptions({headerRight: () => <AddButton />});
  }, []);

  const {data, isLoading, isError, refetch} = useCategoryGetAll();

  function renderItem({item}: ListRenderItemInfo<CategorySpecialtiesResponse>) {
    const navigateToSpecialtyCreate = () =>
      navigation.navigate('SpecialtyCreateScreen', {
        category: {id: item.id, name: item.name},
      });

    const navigateToSpecialtyUpdate = (specialty: SpecialtyResponse) =>
      navigation.navigate('SpecialtyUpdateScreen', {
        category: {id: item.id, name: item.name},
        specialty,
      });

    return (
      <BoxCategory
        category={{id: item.id, name: item.name}}
        navigation={navigation}>
        <BoxSpecialties
          specialties={item.specialties}
          onPressToNavigate={navigateToSpecialtyUpdate}>
          <ButtonAdd
            iconProps={{color: 'secondaryContrast', size: 20}}
            borderWidth={0}
            marginTop="s0"
            height={40}
            onPress={navigateToSpecialtyCreate}
          />
        </BoxSpecialties>
      </BoxCategory>
    );
  }

  return (
    <Screen flex={1}>
      <FlatList
        data={data}
        renderItem={renderItem}
        isSeparator={false}
        loading={isLoading}
        error={isError}
        refetch={refetch}
        listEmptyTitle="Nenhuma categoria encontrada."
      />
    </Screen>
  );
}
