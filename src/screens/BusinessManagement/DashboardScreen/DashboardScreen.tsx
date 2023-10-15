import {Button, Icon, Screen, TextComponent} from '@components';
import {BusinessManagementScreenProps} from '@routes';

export function DashboardScreen({navigation}: BusinessManagementScreenProps) {
  return (
    <Screen>
      <TextComponent>Dashboard</TextComponent>
      <Button
        type="square-right"
        onPress={() => navigation.navigate('WorkingHoursCreateScreen')}>
        <Icon name="AddIcon" size={35} color="white" />
      </Button>
    </Screen>
  );
}
