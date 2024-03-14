import {Screen, ButtonSection, Text, EmptyList, ButtonConfirm} from '@components';
import {
  CategorySpecialtiesResponse,
  categoryUseCases,
} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {useEffect} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  View,
} from 'react-native';

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

  function renderItem({item}: ListRenderItemInfo<CategorySpecialtiesResponse>) {
    return (
      <View>
        <Text size="L" align="justify">
          {item.name}
        </Text>
        <View style={themeRegistry.boxFlexRow}>
          <ButtonSection title={item.name} value />
        </View>
      </View>
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={
          <EmptyList loading={isLoading} error={isError} refetch={refresh} />
        }
      />
      <ButtonConfirm />
    </Screen>
  );
}
