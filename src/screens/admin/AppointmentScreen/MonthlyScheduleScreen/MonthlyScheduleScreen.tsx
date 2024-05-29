import {FlatList, Icon, Screen, Text, TouchableOpacity} from '@components';
import {useScheduleGetDaysWithoutAttendance} from '@domain';
import {useVisibility} from '@hooks';
import {AdminStackProps} from '@routes';
import {useLayoutEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {Calendar} from './components/Calendar';
import {mask} from '@utils';
import {ModalRemove} from './components/ModalRemove';

export function MonthlyScheduleScreen({
  navigation,
}: AdminStackProps<'MonthlyScheduleScreen'>) {
  const modalRemove = useVisibility();
  const modalAdd = useVisibility();

  const [selectedDate, setSelectedDate] = useState<string>();

  const requestToRemove = (date: string) => {
    setSelectedDate(date);
    modalRemove.open();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name="AddIcon" size={30} onPress={modalAdd.open} />
      ),
    });
  }, []);

  const {
    data: daysWithoutAttendance,
    isLoading,
    isError,
    refetch,
  } = useScheduleGetDaysWithoutAttendance();

  return (
    <Screen flex={1}>
      <FlatList
        data={daysWithoutAttendance}
        loading={isLoading}
        error={isError}
        refetch={refetch}
        renderItem={props => (
          <ListDayItem requestToRemove={requestToRemove} {...props} />
        )}
        listEmptyTitle="Nenhum dia bloqueado."
      />
      <Calendar isVisible={modalAdd.isVisible} close={modalAdd.close} />
      <ModalRemove
        isVisible={modalRemove.isVisible}
        close={modalRemove.close}
        selectedDate={selectedDate}
      />
    </Screen>
  );
}

function ListDayItem({
  item: date,
  requestToRemove,
}: ListRenderItemInfo<string> & {
  requestToRemove: (date: string) => void;
}) {
  return (
    <TouchableOpacity
      p="s12"
      borderRadius="s6"
      alignItems="center"
      onPress={() => requestToRemove(date)}>
      <Text variant="paragraphMedium" textAlign="justify">
        {mask.date(new Date(date))}
      </Text>
    </TouchableOpacity>
  );
}
