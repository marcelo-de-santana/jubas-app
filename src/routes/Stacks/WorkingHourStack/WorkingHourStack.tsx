import {
  WorkingHourCreateScreen,
  WorkingHourListScreen,
  WorkingHourUpdateScreen,
} from '@screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WorkingHourResponse} from '@domain';
import {defaultOptions} from '../../screenOptions';

export type WorkingHourStackParamList = {
  WorkingHourCreateScreen: undefined;
  WorkingHourListScreen: undefined;
  WorkingHourUpdateScreen: {workingHour: WorkingHourResponse};
};

export function WorkingHourStack() {
  const NativeStack = createNativeStackNavigator<WorkingHourStackParamList>();
  return (
    <NativeStack.Navigator
      screenOptions={{
        ...defaultOptions,
      }}
      initialRouteName="WorkingHourListScreen">
      <NativeStack.Screen
        name="WorkingHourCreateScreen"
        component={WorkingHourCreateScreen}
        options={{headerTitle: 'Novo horário'}}
      />
      <NativeStack.Screen
        name="WorkingHourListScreen"
        component={WorkingHourListScreen}
        options={{
          headerTitle: 'Horários',
        }}
      />
      <NativeStack.Screen
        name="WorkingHourUpdateScreen"
        component={WorkingHourUpdateScreen}
        options={{
          headerTitle: 'Atualizar horário',
        }}
      />
    </NativeStack.Navigator>
  );
}
