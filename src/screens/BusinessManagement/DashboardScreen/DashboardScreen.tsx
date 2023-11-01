import {ButtonComponent, Menu, Screen} from '@components';
import {BusinessManagementScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {View} from 'react-native';

export function DashboardScreen({navigation}: BusinessManagementScreenProps) {
  return (
    <Screen>
      <View style={themeRegistry['box-flex-row']}>
        <ButtonComponent
          type="menu"
          text="Horários de Trabalho"
          onPress={() => navigation.navigate('WorkingHoursListScreen')}
        />
        <ButtonComponent
          type="menu"
          text="Especialidades"
          onPress={() => navigation.navigate('SpecialtyListScreen')}
        />
        <ButtonComponent
          type="menu"
          text="Categorias"
          onPress={() => navigation.navigate('CategoryListScreen')}
        />
      </View>
    </Screen>
  );
}
