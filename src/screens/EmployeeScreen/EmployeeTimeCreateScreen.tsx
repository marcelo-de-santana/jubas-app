import {ButtonOpacity, FormModal} from '@components';
import {EmployeeTimeCreateScreenProps} from '@routes';
import {colorRegistry, themeRegistry} from '@styles';
import {
  Pressable,
  PressableProps,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

export function EmployeeTimeCreateScreen({
  navigation,
}: EmployeeTimeCreateScreenProps) {
  return (
    <FormModal pressableProps={{onPress: () => navigation.goBack()}}>
      <ButtonOpacity type='active'></ButtonOpacity>
    </FormModal>
  );
}
