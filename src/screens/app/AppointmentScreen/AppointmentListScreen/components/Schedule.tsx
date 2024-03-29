import {
  Box,
  BoxTimeAvailable,
  CollapsibleAccording,
  FlatList,
} from '@components';
import {AppointmentResponse, appointmentUseCases} from '@domain';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function Schedule({date}: Readonly<{date?: string}>) {
  const {data, fetch, isLoading} = appointmentUseCases.getAll();

  const searchData = () => {
    fetch({date});
  };

  useEffect(() => {
    searchData();
  }, []);

  function renderItem({item}: ListRenderItemInfo<AppointmentResponse>) {
    return (
      <CollapsibleAccording
        backgroundColor="primaryContrast"
        borderBottomLeftRadius="s6"
        borderBottomRightRadius="s6"
        padding="s10"
        buttonProps={{
          backgroundColor: 'primaryContrast',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 's10',
          height: 50,
          borderTopLeftRadius: 's6',
          borderTopRightRadius: 's6',
          marginTop: 's4',
        }}
        textProps={{
          variant: 'paragraphMedium',
          color: 'primary',
        }}
        title={item.employeeName}>
        <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
          {item?.workingHours.map(availableTime => {
            return (
              <BoxTimeAvailable
                key={availableTime.time}
                scheduleTime={availableTime}
              />
            );
          })}
        </Box>
      </CollapsibleAccording>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      isSeparator={false}
      listEmptyTitle="Nenhum funcionário disponível."
      loading={isLoading}
      refetch={searchData}
    />
  );
}
