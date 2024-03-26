import {Box, ListEmpty, TouchableOpacityItem} from '@components';
import {appointmentUseCases} from '@domain';
import {mask} from '@utils';
import {ReactNode, useEffect} from 'react';

interface BoxDaysOfWeekProps {
  children?: ReactNode;

  navigate: (day: string) => void;
}

export function BoxDaysOfWeek({
  navigate,
  children,
}: Readonly<BoxDaysOfWeekProps>) {
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
      {children}

      <Box flexDirection="row" justifyContent="space-between" flexWrap="wrap">
        {data?.map(item => {
          const disabled = !item.isAvailable;
          const opacity = disabled ? 0.5 : 1;

          return (
            <TouchableOpacityItem
              key={item.date}
              bg="primaryContrast"
              padding="s10"
              marginBottom="s10"
              width={100}
              borderRadius="s6"
              disabled={disabled}
              opacity={opacity}
              textProps={{color: 'primary'}}
              onPress={() => navigate(item.date)}
              label={mask.dayOfWeek(new Date(item.date))}
            />
          );
        })}
      </Box>
    </>
  );
}
