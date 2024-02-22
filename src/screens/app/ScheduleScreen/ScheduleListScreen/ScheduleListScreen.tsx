import {
  Box,
  BoxTimeAvailable,
  ButtonProps,
  CollapsibleAccording,
  FlatList,
  Screen,
  Text,
  TextProps,
} from '@components';
import {ScheduleResponse, appointmentUseCases} from '@domain';
import {ScheduleStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

//TODO FINALIZAR REGRAS DE NEGÓCIO E ROTAS PARA AGENDAMENTOS
export function ScheduleListScreen({
  navigation,
}: Readonly<ScheduleStackProps<'ScheduleListScreen'>>) {
  const {data, fetch, isLoading, isError, refresh} =
    appointmentUseCases.getAll();

  useEffect(() => {
    fetch();
  }, []);

  function renderItem({item}: ListRenderItemInfo<ScheduleResponse>) {
    return (
      <CollapsibleAccording
        backgroundColor="backgroundContrast"
        borderBottomLeftRadius="s6"
        borderBottomRightRadius="s6"
        buttonProps={$buttonProps}
        textProps={$textProps}
        title={item.employeeName}>
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-around">
          {item?.workingHours.map(workingHour => (
            <BoxTimeAvailable
              backgroundColor="backgroundPrimary"
              borderRadius="s10"
              key={workingHour.time}
              scheduleTime={workingHour}
            />
          ))}
        </Box>
      </CollapsibleAccording>
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        isSeparator={false}
        listEmptyTitle="Não foi possível listar a agenda."
        loading={isLoading}
        error={isError}
        refetch={refresh}
      />
    </Screen>
  );
}

const $buttonProps: ButtonProps = {
  backgroundColor: 'backgroundContrast',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingHorizontal: 's10',
  height: 50,
  borderTopLeftRadius: 's6',
  borderTopRightRadius: 's6',
  marginTop: 's4',
};

const $textProps: TextProps = {
  color: 'fontContrast',
  fontSize: 'XL',
  textAlign: 'center',
  verticalAlign: 'middle',
};
