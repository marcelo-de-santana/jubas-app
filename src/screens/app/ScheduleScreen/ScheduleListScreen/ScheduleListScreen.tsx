import {
  Box,
  BoxTimeAvailable,
  ButtonProps,
  CollapsibleAccording,
  FlatList,
  Screen,
  TextProps,
} from '@components';
import {ScheduleResponse, appointmentUseCases} from '@domain';
import {ScheduleStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function ScheduleListScreen({
  navigation,
}: Readonly<ScheduleStackProps<'ScheduleListScreen'>>) {
  const {data, fetch, isLoading, isError} = appointmentUseCases.getAll();

  const searchData = () => {
    fetch({employeeId: '1253fc44-45c5-440c-b0d8-1b9a2c5dc919'});
  };

  useEffect(() => {
    searchData();
  }, []);

  function renderItem({item}: ListRenderItemInfo<ScheduleResponse>) {
    return (
      <CollapsibleAccording
        backgroundColor="primaryContrast"
        borderBottomLeftRadius="s6"
        borderBottomRightRadius="s6"
        buttonProps={$buttonProps}
        textProps={$textProps}
        title={item.employeeName}>
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
          {item?.workingHours.map(workingHour => (
            <BoxTimeAvailable
              backgroundColor="primary"
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
    <Screen flex={1}>
      <FlatList
        data={data}
        renderItem={renderItem}
        isSeparator={false}
        listEmptyTitle="Não foi possível listar a agenda."
        loading={isLoading}
        error={isError}
        refetch={searchData}
      />
    </Screen>
  );
}

const $buttonProps: ButtonProps = {
  backgroundColor: 'primaryContrast',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingHorizontal: 's10',
  height: 50,
  borderTopLeftRadius: 's6',
  borderTopRightRadius: 's6',
  marginTop: 's4',
};

const $textProps: TextProps = {
  variant: 'paragraphMedium',
  color: 'primary',
  textAlign: 'center',
  verticalAlign: 'middle',
};
