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

export function ScheduleSpecialtiesScreen({
  navigation,
}: Readonly<ScheduleStackProps<'ScheduleSpecialtiesScreen'>>) {
  const {data, fetch, isLoading, isError} = appointmentUseCases.getAll();

  const searchData = () => {
    fetch({specialtyId: '78be8b22-9576-42c9-a819-0e217b10fa30'});
  };

  useEffect(() => {
    searchData();
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
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
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
