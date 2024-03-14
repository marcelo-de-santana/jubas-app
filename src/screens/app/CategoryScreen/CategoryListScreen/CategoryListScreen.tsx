import {ButtonAdd, FlatList, Screen} from '@components';
import {
  CategorySpecialtiesResponse,
  SpecialtyResponse,
  categoryUseCases,
} from '@domain';
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
        refetch={refresh}
        listEmptyTitle="Nenhuma categoria encontrada."
        ListFooterComponent={
          data && (
            <ButtonAdd
              onPress={() => navigation.navigate('CategoryCreateScreen')}
            />
          )
        }
      />
    </Screen>
  );
}
