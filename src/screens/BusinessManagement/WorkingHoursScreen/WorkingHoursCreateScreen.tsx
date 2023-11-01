import {Button, Alert, Text, Screen, ButtonComponent, Modal} from '@components';
import {BusinessManagementScreenProps} from '@routes';
import {buttonRegistry, themeRegistry} from '@styles';
import {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {timestampToTimeFormat, timeToTimestamp} from '@utils';
import {WorkingHoursRequestDTO, createNewWorkingHour} from '@domain';

type WorkingHoursKeys = keyof WorkingHoursRequestDTO;

export function WorkingHoursCreateScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);
  const [workingHourKey, setWorkingHourKey] =
    useState<WorkingHoursKeys>('startTime');
  const [workingHours, setWorkingHours] = useState<WorkingHoursRequestDTO>({
    startTime: '09:00',
    startInterval: '13:00',
    endInterval: '14:00',
    endTime: '19:00',
  });

  function showWatch(key: WorkingHoursKeys) {
    setWorkingHourKey(key);
    setDateTimePickerVisibility(true);
  }

  function closeWatch() {
    setDateTimePickerVisibility(false);
  }

  function onChangeDateTimePicker(event: any, selectedTime: any) {
    if (event.type === 'dismissed') {
      closeWatch();
    }
    if (event.type === 'set') {
      closeWatch();
      const timeformatted = timestampToTimeFormat({
        time: selectedTime?.getTime(),
      });
      setWorkingHours(prev => ({
        ...prev,
        [workingHourKey]: timeformatted,
      }));
    }
  }

  async function sendToCreate() {
    await createNewWorkingHour(workingHours);
    navigation.goBack();
  }

  function askAboutCreate() {
    Alert({
      type: 'decision',
      message: 'Deseja cadastrar os horários?',
      onPress: sendToCreate,
    });
  }

  function LineTexts({textValues}: {textValues: string[]}) {
    return (
      <View style={[themeRegistry['box-flex-row']]}>
        {textValues?.map((value, index) => (
          <View
            key={index}
            style={[buttonRegistry['square-inline-one-fifth-wide']]}>
            <Text color="midnight-blue">{value}</Text>
          </View>
        ))}
      </View>
    );
  }

  function LineButtons({
    values,
  }: {
    values?: {text?: string; onPress?: () => void}[];
  }) {
    return (
      <View style={[themeRegistry['box-flex-row']]}>
        {values?.map((value, index) => (
          <Button
            type="square-inline-one-fifth-wide"
            color="lavender-gray"
            key={index}
            onPress={value.onPress}>
            <Text color="midnight-blue">{value.text}</Text>
          </Button>
        ))}
      </View>
    );
  }

  return (
    <Screen color="black-transparent">
      <Modal onPress={() => navigation.goBack()}>
        <LineTexts
          textValues={[
            'Entrada',
            'Início\nIntervalo',
            'Fim\nIntervalo',
            'Saída',
          ]}
        />

        <LineButtons
          values={[
            {
              text: workingHours.startTime,
              onPress: () => showWatch('startTime'),
            },
            {
              text: workingHours.startInterval,
              onPress: () => showWatch('startInterval'),
            },
            {
              text: workingHours.endInterval,
              onPress: () => showWatch('endInterval'),
            },
            {
              text: workingHours.endTime,
              onPress: () => showWatch('endTime'),
            },
          ]}
        />

        {isDateTimePickerVisible && (
          <DateTimePicker
            is24Hour
            value={timeToTimestamp({
              time: String(workingHours[workingHourKey]),
            })}
            mode="time"
            onTouchCancel={closeWatch}
            onChange={onChangeDateTimePicker}
            display="spinner"
          />
        )}

        <ButtonComponent type="save" text="Salvar" onPress={askAboutCreate} />
      </Modal>
    </Screen>
  );
}
