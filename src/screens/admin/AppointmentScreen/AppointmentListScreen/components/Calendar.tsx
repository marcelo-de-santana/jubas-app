import {
  Box,
  Button,
  Icon,
  Text,
  TouchableOpacity,
  TouchableOpacityItem,
} from '@components';
import {useVisibility} from '@hooks';
import DateTimePicker from '@react-native-community/datetimepicker';
import {mask} from '@utils';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

type CalendarProps = {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
};

export function Calendar({selectedDate, setSelectedDate}: CalendarProps) {
  const {isVisible, handleVisibility} = useVisibility();

  const handleChange = (event: any, selectedDate: any) => {
    if (event.type === 'dismissed') {
      handleVisibility();
    }
    if (event.type === 'set') {
      handleVisibility();
      setSelectedDate(new Date(selectedDate));
    }
  };

  return (
    <>
      <Box
        mb="s20"
        borderWidth={1}
        padding="s10"
        borderRadius="s6"
        borderColor="primaryContrast">
        <TouchableOpacity
          activeOpacity={0.7}
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          onPress={handleVisibility}>
          <Text variant="paragraphMedium" px="s10">
            {mask.date(selectedDate)}
          </Text>
          <Icon name="EditIcon" />
        </TouchableOpacity>
      </Box>
      {isVisible && (
        <DateTimePicker
          mode="date"
          locale="pt-BR"
          value={selectedDate}
          onChange={handleChange}
        />
      )}
    </>
  );
}
