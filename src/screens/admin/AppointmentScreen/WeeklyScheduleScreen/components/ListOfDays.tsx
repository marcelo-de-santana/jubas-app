import {Box, ListEmpty, Text, TouchableOpacity} from '@components';
import {useScheduleGetRangeOfAttendanceDays} from '@domain';
import {useVisibility} from '@hooks';
import {useEffect, useState} from 'react';
import {ModalConfirm} from './ModalConfirm';

export function ListOfDays() {
  const {data, isLoading, isError, refetch} =
    useScheduleGetRangeOfAttendanceDays();

  const [selectedQuantity, setSelectedQuantity] = useState<number>();

  useEffect(() => {
    if (data) {
      setSelectedQuantity(data.quantity);
    }
  }, [data]);

  const daysQuantity = [0, 1, 2, 3, 4, 5, 6];

  const {open, close, isVisible} = useVisibility();

  const handleQuantity = (quantity: number) => {
    setSelectedQuantity(quantity);
    open();
  };

  if (isLoading || isError) {
    return <ListEmpty loading={isLoading} error={isError} refetch={refetch} />;
  }

  return (
    <>
      <ModalConfirm
        close={close}
        isVisible={isVisible}
        selectedQuantity={selectedQuantity}
        quantity={data?.quantity}
      />

      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        pt="s12">
        {daysQuantity.map(quantity => {
          const isSelected = quantity === selectedQuantity;

          return (
            <TouchableOpacity
              key={quantity}
              p="s18"
              activeOpacity={0.8}
              borderRadius="s6"
              bg={isSelected ? 'secondaryContrast' : 'primaryContrast'}
              disabled={isSelected || quantity === data?.quantity}
              onPress={() => handleQuantity(quantity)}>
              <Text color="primary">{quantity}</Text>
            </TouchableOpacity>
          );
        })}
      </Box>
    </>
  );
}
