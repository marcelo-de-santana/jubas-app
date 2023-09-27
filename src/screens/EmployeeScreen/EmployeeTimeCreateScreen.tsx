import {
  ButtonOpacity,
  ButtonOpacityProps,
  DecisionAlert,
  Screen,
  TextComponent,
  TextComponentProps,
  ViewModal,
} from '@components';
import {EmployeeTimeCreateScreenProps} from '@routes';
import {buttonRegistry, colorRegistry, themeRegistry} from '@styles';
import {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {timestampToTimeFormat, timeToTimestamp} from '@utils';
import {WorkingHoursRequestDTO, createNewWorkingHour} from '@repositories';

type WorkingHoursKeys = keyof WorkingHoursRequestDTO;

export function EmployeeTimeCreateScreen({
  navigation,
}: EmployeeTimeCreateScreenProps) {
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

  function confirmSend() {
    DecisionAlert({
      message: 'Deseja cadastrar os horários?',
      onPress: sendForm,
    });
    async function sendForm() {
      await createNewWorkingHour(workingHours);
    }
  }

  function LineTexts({textValues}: {textValues: string[]}) {
    return (
      <View style={[themeRegistry['box-flex-row'], {margin: 10}]}>
        {textValues?.map((value, index) => (
          <View
            key={index}
            style={[buttonRegistry['square-inline'], {width: '23%'}]}>
            <TextComponent color="midnight-blue">{value}</TextComponent>
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
      <View style={[themeRegistry['box-flex-row'], {margin: 10}]}>
        {values?.map((value, index) => (
          <ButtonOpacity
            key={index}
            style={[
              buttonRegistry['square-inline'],
              {
                width: '23%',
                backgroundColor: colorRegistry['lavender-gray'],
                borderWidth: 1,
              },
            ]}
            onPress={value.onPress}>
            <TextComponent color="midnight-blue">{value.text}</TextComponent>
          </ButtonOpacity>
        ))}
      </View>
    );
  }

  return (
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <View
        style={[
          themeRegistry['box-modal-form'],
          {backgroundColor: colorRegistry['light-gray']},
        ]}>
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

        <ButtonOpacity onPress={confirmSend}>
          <TextComponent size="L" color="white">
            Salvar
          </TextComponent>
        </ButtonOpacity>
      </View>
    </ViewModal>
  );
}
