import {Alert, Button, Screen, Text} from '@components';
import {BusinessManagementScreenProps} from '@routes';

export function DashboardScreen({navigation}: BusinessManagementScreenProps) {
  return (
    <Screen>
      <Button
        type="send"
        onPress={() => navigation.navigate('WorkingHoursListScreen')}>
        <Text color="white">Working Hours List</Text>
      </Button>
      <Button
        type="send"
        onPress={() => navigation.navigate('CategoryListScreen')}>
        <Text color="white">Category Create</Text>
      </Button>
    </Screen>
  );
}
