import {Button, Screen} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {themeRegistry} from '@styles';
import {View} from 'react-native';

export function DashboardScreen({
  navigation,
}: BusinessManagementStackProps<'DashboardScreen'>) {
  const navigateToWorkingHoursListScreen = () => {
    navigation.navigate('WorkingHoursListScreen');
  };

  const navigateToSpecialtyListScreen = () => {
    navigation.navigate('SpecialtyListScreen');
  };

  const navigateToCategoryListScreen = () => {
    navigation.navigate('CategoryListScreen');
  };

  return (
    <Screen style={{padding: 10}}>
      <View style={themeRegistry.boxFlexRow}>
        <Button
          type="box"
          title="Gerenciar Horários"
          onPress={navigateToWorkingHoursListScreen}
        />
        <Button
          type="box"
          title="Gerenciar Serviços"
          onPress={navigateToSpecialtyListScreen}
        />
        <Button
          type="box"
          title="Gerenciar Categorias"
          onPress={navigateToCategoryListScreen}
        />
      </View>
    </Screen>
  );
}
