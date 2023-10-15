import {LoadingScreen, Screen} from '@components';
import {BusinessManagementScreenProps} from '@routes';

export function CategoryListScreen({
  navigation,
}: BusinessManagementScreenProps) {
  return (
    <Screen>
      <LoadingScreen />
    </Screen>
  );
}
