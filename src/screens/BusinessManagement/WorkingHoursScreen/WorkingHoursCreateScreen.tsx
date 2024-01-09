import {Button, Alert, Screen, BoxFourItems} from '@components';
import {themeRegistry} from '@styles';
import {useState} from 'react';
import {View} from 'react-native';
import {BusinessManagementStackProps} from '@routes';
import DateTimePicker from '@react-native-community/datetimepicker';
import {WorkingHoursRequest} from '@domain';
import {mask} from '@utils';

type WorkingHoursKeys = keyof WorkingHoursRequest;

interface TimeButtonProps {
  title: string;
  onPress: () => void;
}

const TimeButton: React.FC<TimeButtonProps> = ({title, onPress}) => (
  <Button
    type="inline-one-fifth-wide"
    backgroundColor="lavenderGray"
    title={title}
    textProps={{color: 'steelBlue'}}
    onPress={onPress}
  />
);

export function WorkingHoursCreateScreen({
  navigation,
}: BusinessManagementStackProps<'WorkingHoursCreateScreen'>) {
  const [workingHours, setWorkingHours] = useState<{[key: string]: string}>({
    startTime: '09:00',
    startInterval: '13:00',
    endInterval: '14:00',
    endTime: '19:00',
  });

  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  const [watchVisible, setWatchVisible] = useState(false);

  const [workingHourKey, setWorkingHourKey] = useState('startTime');

  const showWatch = (key: string) => {
    setWorkingHourKey(key);
    setWatchVisible(true);
  };

  const closeWatch = () => {
    setWatchVisible(false);
  };

  const onChangeDateTimePicker = (event: any, selectedTime: any) => {
    if (event.type === 'dismissed') {
      closeWatch();
    }
    if (event.type === 'set') {
      closeWatch();
      const timeformatted = mask.timestampToTimeFormat({
        time: selectedTime?.getTime(),
      });
      setWorkingHours(prev => ({
        ...prev,
        [workingHourKey]: timeformatted,
      }));
    }
  };

  const sendToCreate = async () => {
    await createNewWorkingHour(workingHours);
    navigation.goBack();
  };

  const askAboutCreate = () => {
    Alert({
      type: 'decision',
      message: 'Deseja cadastrar os horários?',
      onPress: sendToCreate,
    });
  };

  function Header() {
    return <BoxFourItems textValues={listHeader} />;
  }

  function LineButtons() {
    const listHours = Object.keys(workingHours);

    return (
      <View style={[themeRegistry['boxFlexRow']]}>
        {listHours?.map((item, index) => (
          <Button
            key={index}
            type="inline-one-fifth-wide"
            backgroundColor="lavenderGray"
            title={workingHours[item]}
            textProps={{color: 'steelBlue'}}
            onPress={() => showWatch(item)}
          />
        ))}
      </View>
    );
  }

  return (
    <Screen>
      {watchVisible && (
        <DateTimePicker
          is24Hour
          value={mask.timeToTimestamp({
            time: String(workingHours[workingHourKey]),
          })}
          mode="time"
          onTouchCancel={closeWatch}
          onChange={onChangeDateTimePicker}
          display="spinner"
        />
      )}
      <Header />
      <LineButtons />
      <Button
        type="inline"
        title="Salvar"
        backgroundColor="steelBlue"
        style={{marginTop: 20}}
        textProps={{color: 'white', size: 'L'}}
        onPress={askAboutCreate}
      />
    </Screen>
  );
}
