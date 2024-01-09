import {Screen, SectionButton, Text} from '@components';
import {useWorkingHoursList} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {useEffect} from 'react';
import {View} from 'react-native';

export function EmployeeServicesListScreen({
  navigation,
}: EmployeeScreenProps<'EmployeeServicesListScreen'>) {
  const {data, isLoading, status} = useWorkingHoursList();

  /**
   * Lista de tarefas
   *
   * Buscar todos os serviços que o barbeiro realiza
   *
   * criar estrutura para adicionar e/ou excluir serviços
   */

  useEffect(() => {}, []);

  return (
    <Screen>
      <Text align="justify">Titulo</Text>
      <View style={themeRegistry.boxFlexRow}>
        <SectionButton title="Corte de cabelo navalhado" value={false} />
        <SectionButton title="Corte de cabelo" value />
        <SectionButton title="CorteCorte de cabelo" value />
        <SectionButton title="Corte de cabelo" value />
        <SectionButton title="Corte de cabelo" value />
        <SectionButton title="Corte de cabelocabelo" value />
        <SectionButton title="CorteCorte de cabelo" value />
        <SectionButton title="CortecabeloCorte de cabelo" value />
        <SectionButton title="Corte de cabelo" value />
      </View>
    </Screen>
  );
}
