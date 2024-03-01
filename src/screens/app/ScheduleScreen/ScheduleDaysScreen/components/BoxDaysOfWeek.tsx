import {Box, ListEmpty, Text, TouchableOpacityItem} from '@components';
import {appointmentUseCases} from '@domain';
import {mask} from '@utils';
import {useEffect} from 'react';

export function BoxDaysOfWeek({
  navigate,
}: Readonly<{navigate: (day: string) => void}>) {
  const {data, fetch, isLoading, isError} =
    appointmentUseCases.getDaysOfAttendance();

  useEffect(() => {
    fetch();
  }, []);

  if (isLoading || isError || data?.length === 0) {
    return <ListEmpty loading={isLoading} title="Nenhum dia disponível." />;
  }

  return (
    <>
      <Text variant="paragraphMedium" textAlign="justify" mb="s12">
        Selecione um dia
      </Text>

      <Box flexDirection="row" justifyContent="space-between" flexWrap="wrap">
        {data?.map(item => {
          return (
            <TouchableOpacityItem
              key={item}
              bg="primaryContrast"
              padding="s10"
              marginBottom="s10"
              width={100}
              borderRadius="s6"
              textProps={{color: 'primary'}}
              onPress={() => navigate(item)}
              label={mask.dayOfWeek(new Date(item))}
            />
          );
        })}
      </Box>
    </>
  );
}
