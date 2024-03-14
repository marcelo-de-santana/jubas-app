import {Box, ListEmpty, TouchableOpacityItem} from '@components';
import {appointmentUseCases} from '@domain';
import {mask} from '@utils';
import {ReactNode, useEffect} from 'react';

interface BoxDaysOfWeekProps {
  children?: ReactNode;
  disabled?: boolean;
  opacity?: number;
  navigate: (day: string) => void;
}

export function BoxDaysOfWeek({
  navigate,
  children,
  disabled = false,
  opacity,
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
          return (
            <TouchableOpacityItem
              key={item}
              bg="primaryContrast"
              padding="s10"
              marginBottom="s10"
              width={100}
              borderRadius="s6"
              disabled={disabled}
              opacity={opacity}
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
