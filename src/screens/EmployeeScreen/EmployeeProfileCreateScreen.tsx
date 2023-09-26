import {FormModal} from '@components';
import {EmployeeProfileCreateScreenProps} from '@routes';

export function EmployeeProfileCreateScreen({
  navigation,
}: EmployeeProfileCreateScreenProps) {
  return <FormModal pressableProps={{onPress: () => navigation.goBack()}} />;
}
