import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppointmentListScreen,
  AppointmentDescriptionScreen,
  AppointmentCreateScreen,
} from '@screens';
import {defaultOptions} from '../../screenOptions';

export type AppointmentStackParamList = {
  AppointmentListScreen: undefined;
  AppointmentCreateScreen: {
    date: string;
    time: string;
    employee: {id: string; name: string};
  };
  AppointmentDescriptionScreen: {appointmentId: string};
};

export function AppointmentStack() {
  const NativeStack = createNativeStackNavigator<AppointmentStackParamList>();

  return (
    <NativeStack.Navigator
      initialRouteName="AppointmentListScreen"
      screenOptions={{...defaultOptions, headerShown: false}}>
      <NativeStack.Screen
        name="AppointmentListScreen"
        component={AppointmentListScreen}
        options={{headerTitle: 'Atendimentos', headerShown: true}}
      />
      <NativeStack.Screen
        name="AppointmentCreateScreen"
        component={AppointmentCreateScreen}
        options={{headerTitle: 'Novo atendimento', headerShown: true}}
      />
      <NativeStack.Screen
        name="AppointmentDescriptionScreen"
        component={AppointmentDescriptionScreen}
        options={{headerTitle: 'Atendimento', headerShown: true}}
      />
    </NativeStack.Navigator>
  );
}
