import {Screen, ButtonSection, Text, EmptyList, ButtonSave} from '@components';
import {
  CategorySpecialtiesResponse,
  SpecialtyResponse,
  categoryUseCases,
} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {useEffect} from 'react';
import {SectionList, SectionListRenderItemInfo, View} from 'react-native';

export function EmployeeServicesListScreen({
  navigation,
}: Readonly<EmployeeScreenProps<'EmployeeServicesListScreen'>>) {
  const {data, isLoading, isError, fetch, refresh} =
    categoryUseCases.getCategoriesAndSpecialties();

  /**
   * TODO
   * Lista de tarefas
   *
   * Buscar todos os serviços que o barbeiro realiza
   *
   * criar estrutura para adicionar e/ou excluir serviços
   */

  useEffect(() => {
    fetch();
  }, []);

  function renderItem({item}: SectionListRenderItemInfo<SpecialtyResponse>) {
    return (
      <View style={themeRegistry.boxFlexRow}>
        <ButtonSection title={item.name} value />
      </View>
    );
  }

  return (
    <Screen>
      <SectionList
        sections={formatData(data)}
        renderSectionHeader={({section: {title}}) => (
          <Text size="M" align="justify">
            {title}
          </Text>
        )}
        renderItem={renderItem}
        ListEmptyComponent={
          <EmptyList loading={isLoading} error={isError} refetch={refresh} />
        }
      />
      <ButtonSave />
    </Screen>
  );
}

const formatData = (data?: CategorySpecialtiesResponse[]) => {
  if (data) {
    return data.map(category => ({
      title: category.name,
      data: category.specialties,
    }));
  }
  return [];
};
