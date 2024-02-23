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
import {
  ScheduleResponse,
  SpecialtyResponse,
  appointmentUseCases,
} from '@domain';
import {ScheduleStackProps} from '@routes';
import {mask} from '@utils';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function ScheduleEmployeesScreen({
  route,
}: Readonly<ScheduleStackProps<'ScheduleEmployeesScreen'>>) {
  const {data, fetch, isLoading} = appointmentUseCases.getAll();

  const searchData = () => {
    fetch({specialtyId: route.params.specialty.id});
  };

  useEffect(() => {
    searchData();
  }, []);

  function renderItem({item}: ListRenderItemInfo<ScheduleResponse>) {
    const oneEmployee = data ? data.length === 1 : false;
    return <Collapsible schedule={item} collapsed={!oneEmployee} />;
  }

  return (
    <Screen flex={1}>
      <FlatList
        data={data}
        renderItem={renderItem}
        isSeparator={false}
        ListHeaderComponent={<Header specialty={route.params.specialty} />}
        listEmptyTitle="Nenhum funcionário disponível."
        loading={isLoading}
        refetch={searchData}
      />
    </Screen>
  );
}

function Header({specialty}: Readonly<{specialty: SpecialtyResponse}>) {
  return (
    <Box>
      <Text variant="paragraphMedium" textAlign="justify">
        Descrição do serviço
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        borderRadius="s6"
        padding="s12">
        <Text color="primaryContrast">{specialty.name}</Text>
        <Text color="primaryContrast">{mask.money(specialty.price)}</Text>
        <Text color="primaryContrast">{specialty.timeDuration}</Text>
      </Box>
    </Box>
  );
}

function Collapsible({
  schedule,
  collapsed,
}: Readonly<{
  schedule: ScheduleResponse;
  collapsed?: boolean;
}>) {
  return (
    <CollapsibleAccording
      collapsed={collapsed}
      backgroundColor="primaryContrast"
      padding="s10"
      borderBottomLeftRadius="s6"
      borderBottomRightRadius="s6"
      buttonProps={$buttonProps}
      textProps={$textProps}
      title={schedule.employeeName}>
      <Box flexDirection="row" flexWrap="wrap">
        {schedule?.workingHours.map(workingHour => (
          <BoxTimeAvailable key={workingHour.time} scheduleTime={workingHour} />
        ))}
      </Box>
    </CollapsibleAccording>
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
