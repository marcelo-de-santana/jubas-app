import {Button, Screen} from '@components';
import {BusinessManagementScreenProps} from '@routes';
import {buttonStyle} from '@styles';
import {View} from 'react-native';

export function DashboardScreen({navigation}: BusinessManagementScreenProps) {
  function navigateToWorkingHoursListScreen() {
    navigation.navigate('WorkingHoursListScreen');
  }

  function navigateToSpecialtyListScreen() {
    navigation.navigate('SpecialtyListScreen');
  }

  function navigateToCategoryListScreen() {
    navigation.navigate('CategoryListScreen');
  }

  return (
    <Screen style={{padding: 10}}>
      <View style={buttonStyle['view-box']}>
        <Button
          type="box"
          text="Gerenciar Horários"
          onPress={navigateToWorkingHoursListScreen}
        />
        <Button
          type="box"
          text="Gerenciar Serviços"
          onPress={navigateToSpecialtyListScreen}
        />
        <Button
          type="box"
          text="Gerenciar Categorias"
          onPress={navigateToCategoryListScreen}
        />
      </View>
    </Screen>
  );
}
