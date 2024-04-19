import {Box, TouchableOpacityItem} from '@components';
import {DayOfWeekResponse} from '@domain';
import {mask} from '@utils';
import {FlatList, ListRenderItemInfo} from 'react-native';

interface BoxDaysOfWeekProps {
  daysOfWeek?: DayOfWeekResponse[];
  selectedDay?: string;
  chooseDay: (day: string) => void;
}

export function BoxDaysOfWeek({
  daysOfWeek,
  chooseDay,
  selectedDay,
}: BoxDaysOfWeekProps) {
  const lastIndex = daysOfWeek && daysOfWeek.length - 1;

  return (
    <Box height={50}>
      <FlatList
        horizontal
        data={daysOfWeek}
        renderItem={props => (
          <DayOfWeekListItem
            lastIndex={lastIndex}
            selectedDay={selectedDay}
            chooseDay={chooseDay}
            {...props}
          />
        )}
      />
    </Box>
  );
}

function DayOfWeekListItem({
  item,
  index,
  lastIndex,
  selectedDay,
  chooseDay,
}: ListRenderItemInfo<DayOfWeekResponse> & {
  lastIndex?: number;
  selectedDay?: string;
  chooseDay: (day: string) => void;
}) {
  const disabled = !item.available || item.date === selectedDay;
  const opacity = disabled ? 0.5 : 1;
  const isLast = lastIndex === index;
  return (
    <TouchableOpacityItem
      activeOpacity={1}
      key={item.date}
      bg="primaryContrast"
      p="s10"
      mr={!isLast ? 's10' : undefined}
      mb="s10"
      borderRadius="s6"
      width={100}
      disabled={disabled}
      opacity={opacity}
      textProps={{color: 'primary'}}
      onPress={() => chooseDay(item.date)}
      label={mask.dayOfWeek(new Date(item.date))}
    />
  );
}
