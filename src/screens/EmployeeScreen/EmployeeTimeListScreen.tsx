import {
  LoadingScreen,
  Screen,
  Text,
  Touchable,
  ViewSeparator,
} from '@components';
import {
  WorkingHoursResponseDTO,
  getAllWorkingHours,
  updateEmployee,
} from '@repositories';
import {EmployeeTimeListScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ColorName} from '@styles';

interface ListTimeProps {
  color?: 'lavender-gray' | 'light-gray';
  textValues?: string[];
  disabled: boolean;
  onPress?: () => void;
}

function ListTime({color, textValues, disabled, onPress}: ListTimeProps) {
  return (
    <Touchable
      color={color}
      type="box-flex-row-list"
      disabled={disabled}
      onPress={onPress}>
      {textValues?.map((item, index) => (
        <View key={index} style={{width: '20%', justifyContent: 'center'}}>
          <Text color="steel-blue" align="center" size="S">
            {item}
          </Text>
        </View>
      ))}
    </Touchable>
  );
}

export function EmployeeTimeListScreen({
  navigation,
  route,
}: EmployeeTimeListScreenProps) {
  const {employeeId, workingHours} = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [workingHoursData, setWorkingHoursData] = useState<
    WorkingHoursResponseDTO[]
  >([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchData();
    });
  }, [navigation]);

  async function searchData() {
    setIsLoading(true);
    setWorkingHoursData(await getAllWorkingHours());
    setIsLoading(false);
  }

  async function selectWorkingHour(workingHoursId: number) {
    await updateEmployee({employeeId, workingHoursId});
    navigation.goBack();
  }

  function renderItem({item}: {item: WorkingHoursResponseDTO}) {
    let touchableStyle: ColorName = 'light-gray';
    let touchableDisable = false;

    if (item.id === workingHours?.id) {
      touchableStyle = 'lavender-gray';
      touchableDisable = true;
    }

    return (
      <ListTime
        onPress={() => selectWorkingHour(item.id)}
        color={touchableStyle}
        disabled={touchableDisable}
        textValues={[
          item.startTime,
          item.startInterval,
          item.endInterval,
          item.endTime,
        ]}
      />
    );
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <Screen>
      <FlatList
        data={workingHoursData}
        ListHeaderComponent={
          <ListTime
            disabled={true}
            textValues={[
              'Entrada',
              'Início\nIntervalo',
              'Fim\nIntervalo',
              'Saída',
            ]}
          />
        }
        ItemSeparatorComponent={ViewSeparator}
        renderItem={renderItem}
      />
    </Screen>
  );
}
