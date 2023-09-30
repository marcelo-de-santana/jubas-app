import {
  ButtonOpacity,
  DecisionAlert,
  Icon,
  LoadingScreen,
  Screen,
  TextComponent,
  TouchableComponent,
  ViewSeparator,
} from '@components';
import {
  WorkingHoursResponseDTO,
  getAllWorkingHours,
  updateEmployeeWorkingHour,
} from '@repositories';
import {EmployeeTimeListScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ColorName} from '@styles';

export function EmployeeTimeListScreen({
  navigation,
  route,
}: EmployeeTimeListScreenProps) {
  const {employee} = route.params;
  const {workingHours} = employee;

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

  function renderItem({item}: {item: WorkingHoursResponseDTO}) {
    let touchableStyle: ColorName = 'light-gray';
    let touchableDisable = false;

    if (item.id === workingHours.id) {
      touchableStyle = 'lavender-gray';
      touchableDisable = true;
    }

    return (
      <ListTime
        onPress={() => updateEmployeeWorkingHour(employee.id, item.id)}
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

  if (isLoading) {
    return <LoadingScreen />;
  }

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
      <ButtonOpacity
        type="square-right"
        onPress={() => navigation.navigate('EmployeeTimeCreateScreen')}>
        <Icon name="AddCircleIcon" size={40} color="white" />
      </ButtonOpacity>
    </Screen>
  );
}

interface ListTimeProps {
  color?: 'lavender-gray' | 'light-gray';
  textValues?: string[];
  disabled: boolean;
  onPress?: () => void;
}

function ListTime({color, textValues, disabled, onPress}: ListTimeProps) {
  return (
    <TouchableComponent
      color={color}
      type="box-flex-row-list"
      disabled={disabled}
      onPress={onPress}>
      {textValues?.map((item, index) => (
        <View key={index} style={{width: '20%', justifyContent: 'center'}}>
          <TextComponent color="steel-blue" align="center" size="S">
            {item}
          </TextComponent>
        </View>
      ))}
    </TouchableComponent>
  );
}
