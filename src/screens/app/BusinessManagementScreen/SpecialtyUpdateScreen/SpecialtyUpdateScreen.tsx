import {Screen, TextInput} from '@components';
import {BusinessManagementStackProps} from '@routes';

export function SpecialtyUpdateScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'SpecialtyUpdateScreen'>>) {
  return (
    <Screen flex={1}>
      <TextInput value={route.params.specialty.name} />
      <TextInput
        keyboardType="number-pad"
        value={String(route.params.specialty.price)}
      />
      <TextInput value={route.params.specialty.timeDuration} />
    </Screen>
  );
}
